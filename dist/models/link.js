"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var schema = new _mongoose.Schema({
  link: {
    type: 'String',
    required: true,
    trim: true,
    lowercase: true
  },
  shortLink: {
    type: 'String',
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    dropDups: true
  },
  author: (0, _defineProperty2["default"])({
    type: 'String',
    required: true,
    trim: true,
    lowercase: true
  }, "lowercase", true)
});
var Model = (0, _mongoose.model)('Link', schema);
var _default = Model;
exports["default"] = _default;