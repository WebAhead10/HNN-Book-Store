const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require('path');
const PORT = process.env.PORT || 3001;
const SECRET = "nkA$SD89&&282hd";
const server = express();
const router = require('./router')
// const pg = require('pg');
const db = require("./database/connection");
server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.static("public"));
server.use(router)


const users = [{
  name: "Noor",
  password: "1234"
},
{
  name: "Hussein",
  password: "1234"
},
{
  name: "Nidaa",
  password: "1234"
},
];


server.use((req, res, next) => {
  const token = req.cookies.user;

  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;

  }
  next();
});

function checkAuth(req, res, next) {
  const user = req.body.user;

  if (!user) {
    res.status(401).send(`
    <link rel="stylesheet" href="/style.css">
      <h1 class="h1">Please log in to view this page</h1>
      <a class="a" href="/index.html">Log in</a>
    `);
  } else {
    next();
  }
}


function handleErrors(error, req, res, next) {
  console.error(error);
  const status = error.status || 500;
  res
    .status(status)
    .send(
      ` <link rel="stylesheet" href="/style.css" /><h1 class ="h1">Something went wrong</h1>`
    )
};


server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


//    DATABASE_URL=postgres://awnxjhldkaoisa:d56b56c1868335b38051b3d12b02812d860929637cd993e51e936cf89aa424eb@ec2-54-211-77-238.compute-1.amazonaws.com:5432/d1r3brqarbmi7v