console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
//use => middleware
//set => setting

// MongoDB chaqirish

const db = require("./server").db();
const mongodb = require("mongodb");

// 1: Kirish code
app.use(express.static("public")); // brouserlarga public folder ochiq degani.
app.use(express.json()); // kirib kelayotgan data ni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan kelgan ma'lumotlarni qabul qiladi.

// 2: Session code

// 3: Views code
app.set("views", "views"); // folderni korsatyapmiz.
app.set("view engine", "ejs"); // view engine ejs ekanligini korsatyapmiz.

// 4: Routing code

// create-item
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

// delete-item
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, (err, data) => {
    res.json({ state: "success" });
  });
});

// edit item
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { reja: data.new_input } },
    (err, data) => {
      res.json({ state: "success" });
    }
  );
});

// delete all

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});

// author portfoilo
app.get("/author", function (req, res) {
  console.log("user entered /author");

  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
