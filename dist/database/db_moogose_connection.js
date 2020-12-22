"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbConnect = dbConnect;
exports.dbDesconnect = dbDesconnect;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function dbConnect(_x) {
  return _dbConnect.apply(this, arguments);
}

function _dbConnect() {
  _dbConnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(MONGODB_URL) {
    var conn;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _mongoose["default"].connect(MONGODB_URL, {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useCreateIndex: true
            });

          case 3:
            conn = _context.sent;
            return _context.abrupt("return", conn);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _dbConnect.apply(this, arguments);
}

function dbDesconnect() {
  return _dbDesconnect.apply(this, arguments);
}

function _dbDesconnect() {
  _dbDesconnect = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              _mongoose["default"].connection.close();
            } catch (error) {
              console.error(error);
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _dbDesconnect.apply(this, arguments);
}