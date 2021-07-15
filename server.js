const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const path = require('path');
const PORT = process.env.PORT || 3001;
const SECRET = "nkA$SD89&&282hd";
const server = express();
// const pg = require('pg');
const db = require("./database/connection");
server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.static("public"));


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

server.get('/', (req, res) => {
      res.cookie("user", 'user', {
        maxAge: 600000
      });
      db.query("SELECT * FROM users").then((result) => {
        console.log(result.rows);
      });
          res.sendFile(path.join(__dirname, 'public/index.html'))

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


      server.post("/", (req, res) => {
        db.query("SELECT * FROM users").then((result) => {
          console.log(result.rows);
        });
        const user = req.body.user;
        const password = req.body.password;
        const ifexists = users.filter(({
          name,
          password
        }) => user == name)
        if (ifexists) {
          const token = jwt.sign({
            user,
            password
          }, SECRET);
          res.cookie("user", token, {
            maxAge: 600000
          });
          res.redirect("/user")
        } else {

          res.send(`
    <link rel="stylesheet" href="/style.css">
    <h1 class="h1">Please Enter a correct username</h1>
    <a class ="a" href="/index.html">Try again</a>
  `)
        };
      });




      server.get("/user", (req, res) => {
        res.sendFile(path.join(__dirname, 'public/mainpage.html'));
      });


      server.get("/error", (req, res, next) => {
        const fakeError = new Error("uh oh");
        fakeError.status = 403;
        next(fakeError);
      });

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


      // DATABASE_URL=postgres://awnxjhldkaoisa:d56b56c1868335b38051b3d12b02812d860929637cd993e51e936cf89aa424eb@ec2-54-211-77-238.compute-1.amazonaws.com:5432/d1r3brqarbmi7v