'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _link = _interopRequireDefault(require("./api/link"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var Db = _interopRequireWildcard(require("./database/db_moogose_connection"));

_dotenv["default"].config();

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var server;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          server = new _express["default"]();
          server.use(_express["default"].urlencoded());
          server.use(_express["default"].json());
          server.use((0, _morgan["default"])('dev'));
          server.use(_link["default"]);
          server.listen(process.env.PORT, function () {
            console.log("Server is listening...");

            try {
              Db.dbConnect(process.env.MONGODB_URL);
            } catch (error) {
              console.log(error);
              process.exit(0);
            }
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();