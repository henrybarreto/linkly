'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _link = _interopRequireDefault(require("./api/link"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _db = _interopRequireDefault(require("./loader/db"));

_dotenv["default"].config();

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var server;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          server = new _express["default"]();
          server.use(_express["default"].urlencoded());
          server.use(_express["default"].json());
          server.use((0, _morgan["default"])(process.env.ENV));
          server.use(_link["default"]);
          server.listen(process.env.PORT, /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('Server listing...');
                    (0, _db["default"])();

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          })));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();