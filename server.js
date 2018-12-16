var express = require("express");
var app = express();

app.use(express.static("/Users/spiderfencer/WitchesAndWarfare"));

app.listen("7000");
console.log("Working on 7000...");
