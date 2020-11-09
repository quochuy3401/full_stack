const fs = require("fs");
// const http = require("http");
const express = require("express");

console.log("hello");

const myMath = require("./myMath");
console.log(myMath.sum(1, 2));

fs.writeFile("hello.txt", "hello, world", "utf-8", function () {
  console.log("written");
});

// http
//   .createServer((req, res) => {
//     res.write("hello, world");
//     res.end();
//   })
//   .listen(5000);

const app = express();
app.get("/", (req, res) => {
    console.log(req);
  res.json({hello : "MindX"});
});
app.listen(5000);