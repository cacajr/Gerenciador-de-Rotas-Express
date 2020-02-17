const express = require("express");

const routes = express.Router();

const get = require("./../controllers/get");
const post = require("./../controllers/post");

routes.get("/get", get);
routes.get("/post", post);

module.exports = routes;