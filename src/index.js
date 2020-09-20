"use strict";
exports.__esModule = true;
var express_1 = require("express");
var grocery_1 = require("./routes/grocery");
var app = express_1["default"]();
var port = 8080;
app.use(express_1["default"].json());
app.use("/groceries", grocery_1["default"]);
app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
});
