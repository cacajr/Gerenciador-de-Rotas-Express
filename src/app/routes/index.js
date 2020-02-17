const express = require("express");

const routes = express.Router();

const get = require("./../controllers/get");

routes.get("/", get);

module.exports = routes;