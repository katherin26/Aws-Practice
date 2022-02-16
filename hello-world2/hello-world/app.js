//NOTE: Get express JS Working inside the handler.

/*Our code for the application is stored inside hello-world/app.js. */

const serverless = require("serverless-http");
const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
