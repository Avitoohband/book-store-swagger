"use strict";

var path = require("path");
var http = require("http");

var oas3Tools = require("oas3-tools");
var serverPort = 8080;

require("dotenv").config();
const mongoose = require("mongoose");

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);
var app = expressAppConfig.getApp();

// Initialize the Swagger middleware
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo!");
    http.createServer(app).listen(serverPort, function () {
      console.log(
        "Your server is listening on port %d (http://localhost:%d)",
        serverPort,
        serverPort
      );
      console.log(
        "Swagger-ui is available on http://localhost:%d/docs",
        serverPort
      );
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
