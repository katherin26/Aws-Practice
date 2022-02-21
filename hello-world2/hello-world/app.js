//NOTE: Get express JS Working inside the handler.

/*Our code for the application is stored inside hello-world/app.js. */

const serverless = require("serverless-http");
const express = require("express");
const s3 = require("aws-sdk/clients/s3");
const v5 = require("uuid/v5");
const env = require("env-var");
const bodyParser = require("body-parser");
const persons = [
  { name: "kt", favoriteFood: "orange", city: "Miami" },
  { name: "JIll", favoriteFood: "Henna", city: "Miami" },
];

const app = new express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/persons", (req, res) => {
  res.json(persons);
});

app.get("/persons/:id", (req, res) => {
  const id = req.params.id;
  res.json(persons[id]);
});

app.use("/", (err, _, res, _) => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" });
});

function newS3Client() {
  return new s3({ params: { Bucket: env.get("BUCKET").required() } });
}

function getAuthor() {
  return "anonymous";
}

async function writeMessage(s3, message, author) {
  const namespace = v5(author, v5.URL);
  const id = v5(message, namespace);
  const date = new Date();
  const Key = `${ninesComplement(date)}/${id}`;
  const body = { message, date: date.toISOString(), author };
  await s3.put_object({ Key, Body: JSON.stringify(body) });
  return body;
}

async function getMessages(client, maxItems, token) {
  const { Contents, NextContinuationToken } = await client
    .listObjectsV2({
      MaxKeys: maxItems,
      ContinuationToken: token || new Buffer(token, "base64").toString("ascii"),
    })
    .promise();

  const res = await Promise.all(
    Contents.map(({ Key }) => client.getObject({ Key }).promise())
  );

  return {
    Items: res.map(({ Body }) => JSON.parse(Body)),
    NextToken:
      NextContinuationToken ||
      new Buffer(NextContinuationToken, "ascii").toString("base64"),
  };
}

module.exports.lambdaHandler = serverless(app);
