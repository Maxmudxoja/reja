console.log(`Web Serverni boshlash`);

const express = require("express");
const app = express();
const fs = require("fs");

// let user;
// fs.readFile(`database/user.json`, `utf8`, (err, data) => {
//   if (err) {
//     console.log(`ERROR: `, err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// MongoDB chaqirish

const db = require("./server").db();

// 1-> bosqich ->Kirish codelari
// expressga kirib kelayotgan ma'lumotlarga oid boshqichlar yoziladi
app.use("/public", express.static("public")); // -> kirib kelayotgan requestlar uchun public folderi ochiq deagn ma'noni anglatadi.
app.use(express.json()); //-> kirib kelayotgan json formatdagi datani objectga o'zhartirib beradi. Client va server ortasidagi data json korinishida boladi .
app.use(express.urlencoded({ extended: true })); // formdan kelgan requestlarni qabul qilish uchun

//2-bosqich Session boyicha bo'lim

//3-bosqich-> view backend yashash uchun , frontend yasaladi backendni ichida-> VIEWsgabog'liq codelar
app.set("views", "views"); // folderlarni korsatyapmiz ,
app.set("view engine", "ejs"); // view engine bu ejs ekanligi korsatilyapdi

//4-bosqich->Routing bog'liq codelar
// app.get("/hello", function(req,res){
//     res.end(`<h1>Hello World </h1>`);
// });
// app.get("/gift", function(req,res){
//     res.end(`<h1>Siz sovg'alar sahifasidasiz</h1>`);
// });
// app.get("/", function(req,res){
//     res.end(`<h1>Hello World </h1>`);
// });

app.post(`/create-item`, (req, res) => {
  console.log(req.body);
  res.json({ test: "Success" });
});

app.get(`/author`, (req, res) => {
  res.render(`author`, { user: user });
});

app.get(`/`, function (req, res) {
  res.render(`reja`);
});

module.exports = app;
