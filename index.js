/** @format */

const express = require("express");
const { default: fetch } = require("node-fetch");

const app = express();

const DATE_SERVICE_HOST = process.env.DATE_SERVICE_HOST || "http://localhost:3005";

app.get("/", (res, req) => {
  fetch(DATE_SERVICE_HOST)
    .then((res) => res.json())
    .then((data) => {
      req.send(`Hello world! Date: ${data}`);
    });
});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
