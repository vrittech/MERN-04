// import http from "node:http";
// const { add } = require("./math");
// import add from "./math.js";
// console.log("Sum", add(1, 2));

// const hostname = "127.0.0.1";
// const port = 8000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server is running on http://${hostname}:${port}`);
// });

// Callback based API
// const fs = require("node:fs");

// fs.writeFile("demo.txt", "Hello World", (err, data) => {
//   if (err) throw err;
//   console.log("Data", data);
// });

// fs.readFile("demo.txt", (err, data) => {
//   if (err) throw err;
//   console.log("Data", data);
// });

// const path = require("node:path");
// console.log("Extension", path.extname("/data/demo.txt"));
// console.log("Extension", path.join("/data", "demo", "demo-1"));

// const os = require("node:os");
// console.log(os.type());
// console.log(os.cpus().length);
// console.log(os.arch());

// Promised based API
// const fs = require("fs");

// fs.writeFile("demo.txt", "Hello World")
//   .then((data) => console.log("Data", data))
//   .catch((err) => console.log("Error", err));

// fs.readFile("demo.txt", { encoding: "base64" })
//   .then((data) => console.log("Data", data))
//   .catch((err) => console.log("Error", err));

// const writeStream = fs.createWriteStream("demo.txt");

// writeStream.write("Writable stream example 1", "utf8");
// writeStream.write("Writable stream example 2", "utf8");
// writeStream.write("Writable stream example 3", "utf8");

// writeStream.end();

// writeStream.on("finish", (err) => {
//   console.log("Error", err);
// });

// writeStream.on("error", (err) => {
//   console.log("err");
// });

// const readStream = fs.createReadStream("demo.txt");
// readStream.setEncoding("base64");

// readStream.on("data", (chunk) => {
//   console.log("Chunk", chunk);
// });

// readStream.on("finish", (err) => {
//   console.log("Error", err);
// });

// readStream.on("error", (err) => {
//   console.log("err");
// });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about-us", (req, res) => {
//   res.send("About us!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
