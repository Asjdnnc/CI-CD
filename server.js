import express from "express";
import sum from './sum.js'
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/getsum/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const sumFn = sum(parseInt(a), parseInt(b));
  res.send(`Sum of ${a} and ${b} is ${sumFn}`);
});

app.listen(4000, () => {
  console.log("Server is running on port 3000");
}); 