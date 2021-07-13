const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { STATUS_CODES } = require("http");
const { Script } = require("vm");

const PORT = process.env.PORT || 3001;
const SECRET = "nkA$SD89&&282hd";
const templates = require("./templates");
const server = express();

server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.static("public"));


