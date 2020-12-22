"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var Db = _interopRequireWildcard(require("../database/db_moogose_connection"));

function loadDb() {
  return _loadDb.apply(this, arguments);
}

function _loadDb() {
  _loadDb = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Db.dbConnect(process.env.MONGODB_URL);

          case 3:
            if (!_context.sent) {
              _context.next = 7;
              break;
            }

            console.log('Connected with DB!');
            _context.next = 8;
            break;

          case 7:
            console.log('Erro on Mongoose connection');

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            process.exit(0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _loadDb.apply(this, arguments);
}

var _default = loadDb;
exports["default"] = _default;