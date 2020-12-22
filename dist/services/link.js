"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLink = getLink;
exports.createLink = createLink;
exports.deleteLink = deleteLink;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _link = _interopRequireDefault(require("../models/link"));

// import link from '../controllers/link';
function getLink(_x) {
  return _getLink.apply(this, arguments);
}

function _getLink() {
  _getLink = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(shortLink) {
    var linkFinded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _link["default"].findOne({
              shortLink: shortLink
            }).exec();

          case 3:
            linkFinded = _context.sent;
            return _context.abrupt("return", linkFinded);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.warn(_context.t0);
            return _context.abrupt("return", undefined);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getLink.apply(this, arguments);
}

function createLink(_x2, _x3, _x4) {
  return _createLink.apply(this, arguments);
}

function _createLink() {
  _createLink = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(link, shortLink, author) {
    var linkToSave;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            linkToSave = new _link["default"]({
              link: link,
              shortLink: shortLink,
              author: author
            });
            _context2.next = 4;
            return linkToSave.save();

          case 4:
            return _context2.abrupt("return", linkToSave);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", undefined);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _createLink.apply(this, arguments);
}

function deleteLink(shortlink) {}