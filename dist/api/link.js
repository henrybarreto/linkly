"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _link = _interopRequireDefault(require("../controllers/link.js"));

var router = new _express.Router();
router.get('/:link', _link["default"].get);
router.post('/link', _link["default"].post);
router["delete"]('/link', _link["default"].del);
var _default = router;
exports["default"] = _default;