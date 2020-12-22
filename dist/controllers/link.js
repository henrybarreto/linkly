"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _link = require("../services/link");

var _http = require("../services/http");

function get(_x, _x2, _x3) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response, next) {
    var shortLink, linkGot;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            shortLink = request.params.link;

            if (shortLink) {
              _context.next = 5;
              break;
            }

            (0, _http.responseJSON400Status)(response, {
              message: "Invalid input"
            });
            return _context.abrupt("return");

          case 5:
            _context.next = 7;
            return (0, _link.getLink)(shortLink);

          case 7:
            linkGot = _context.sent;
            linkGot ? (0, _http.responseJSON200Status)(response, {
              linkGot: linkGot,
              code: 2
            }) : (0, _http.responseJSON404Status)(response, {
              message: "Not found!",
              code: 3
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            (0, _http.responseJSON500Status)(response);

          case 14:
            _context.prev = 14;
            next();
            return _context.finish(14);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11, 14, 17]]);
  }));
  return _get.apply(this, arguments);
}

function post(_x4, _x5, _x6) {
  return _post.apply(this, arguments);
}

function _post() {
  _post = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response, next) {
    var _request$body, link, shortLink, author;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _request$body = request.body, link = _request$body.link, shortLink = _request$body.shortLink, author = _request$body.author;

            if (!(!link || !shortLink || !author)) {
              _context2.next = 5;
              break;
            }

            (0, _http.responseJSON400Status)(response, {
              message: "Invalid inputs"
            });
            return _context2.abrupt("return");

          case 5:
            _context2.next = 7;
            return (0, _link.createLink)(link, shortLink, author);

          case 7:
            if (!_context2.sent) {
              _context2.next = 11;
              break;
            }

            (0, _http.responseJSON202Status)(response, {
              message: "Created",
              code: 0
            });
            _context2.next = 12;
            break;

          case 11:
            (0, _http.responseJSON200Status)(response, {
              message: "Already exist",
              code: 1
            });

          case 12:
            _context2.next = 17;
            break;

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0); // mongoose error handler

          case 17:
            _context2.prev = 17;
            next();
            return _context2.finish(17);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 14, 17, 20]]);
  }));
  return _post.apply(this, arguments);
}

function del(request, response, next) {
  next();
}

var _default = {
  get: get,
  post: post,
  del: del
};
exports["default"] = _default;