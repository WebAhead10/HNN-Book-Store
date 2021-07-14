const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3000;
const SECRET = "nkA$SD89&&282hd";
const server = express();

server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.static("public"));

server.get('/', (req, res) => {
    // res.cookie("email", 'test@test.com', { maxAge: 600000 });
    res.sendFile(path.join(__dirname, '/index.html'))
})

function checkAuth(req, res, next) {
  const user = req.user;
 

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

server.get("/user-profile", checkAuth, (req, res) => {
  const user = req.user;
  console.log(req.user);
  // const student = students.filter((student) => student.email === user.email)[0];

  res.send(`<link rel="stylesheet" href="/main-style.css"> <h1 class="h1">Hello ${
    user.name
  } !</h1>
  <br> 
  ${students.map((student) => {
    return `<link rel="stylesheet" href="/style.css">
    <a class="a" href="/profiles/${student.name}">${student.name}'s profile</a> <br><br>`;
  })}
  
  <a class="a" href="/log-out">Log out</a>
  `);
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
      );
  }
  
  server.use(handleErrors);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));