console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public")); // brouserlarga public folder ochiq degani.
app.use(express.json()); // kirib kelayotgan data ni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan kelgan ma'lumotlarni qabul qiladi.

// 2: Session code

// 3: Views code
app.set("views", "views"); // folderni korsatyapmiz.
app.set("view engine", "ejs"); // view engine ejs ekanligini korsatyapmiz.

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3005;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
