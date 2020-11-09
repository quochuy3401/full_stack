const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors())
const students = [
  { id: 1, name: "Nguyen Van A", avg: 7.5 },
  { id: 2, name: "Nguyen Van B", avg: 8.5 },
  { id: 3, name: "Nguyen Van C", avg: 9.5 },
];

app.get("/", (req, res) => {
  res.send("hello, world");
});

app.get("/student", (req, res) => {
  res.json(students);
});

app.post("/student", (req, res) => {
  students.push(req.body);
  res.json(students);
});

app.delete("/student/:id", (req, res) => {
  // console.log(req.params.id);
  const deleteIdx = students.findIndex((s) => s.id == req.params.id);
  students.splice(deleteIdx, 1);
  res.json(students);
});

app.put("/student/:id", (req, res) => {
  students[3].avg = 10;
  res.json(students);
});

app.listen(5000, () => {
  console.log("App is running at 5000");
});
