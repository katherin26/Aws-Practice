//NOTE: Get express JS Working inside the handler.

/*Our code for the application is stored inside hello-world/app.js. */

const serverless = require("serverless-http");
const express = require("express");
const s3 = require("aws-sdk/clients/s3");
const v5 = require("uuid/v5");
const env = require("env-var");
const bodyParser = require("body-parser");

const app = new express();

app.get("/", (err, _, res, _) => {
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

module.exports.lambdaHandler = serverless(app);
