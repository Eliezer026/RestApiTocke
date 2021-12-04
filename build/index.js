"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _ProductsRoutes = _interopRequireDefault(require("./routes/ProductsRoutes"));

var _initialSetup = require("./libs/initialSetup");

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _initialSetup.createroles)();
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev"));
app.use("/Products", _ProductsRoutes["default"]);
app.use("/api/auth", _auth["default"]);
app.listen(4000);
console.log("Serve listen on port ", 4000);