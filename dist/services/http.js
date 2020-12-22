"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responseJSONStatus = responseJSONStatus;
exports.responseJSON400Status = responseJSON400Status;
exports.responseJSON404Status = responseJSON404Status;
exports.responseJSON409Status = responseJSON409Status;
exports.responseJSON200Status = responseJSON200Status;
exports.responseJSON201Status = responseJSON201Status;
exports.responseJSON202Status = responseJSON202Status;
exports.responseJSON500Status = responseJSON500Status;
var CONTROLLER_SERVER_ERROR_MSG = "Internal Server Error";

function responseJSONStatus(response, data, code) {
  response.status(code);
  response.json(data);
  return response;
}
/**
 * Bad Request
 * @param {*} response 
 * @param {*} data 
 */


function responseJSON400Status(response, data) {
  return responseJSONStatus(response, data, 400);
}
/**
 * Not found
 * @param {*} response 
 * @param {*} data 
 */


function responseJSON404Status(response, data) {
  return responseJSONStatus(response, data, 404);
}
/**
 * Conflict
 * @param {*} response 
 * @param {*} data 
 */


function responseJSON409Status(response, data) {
  return responseJSONStatus(response, data, 409);
}
/**
 * Ok
 * @param {*} reponse 
 * @param {*} data 
 */


function responseJSON200Status(reponse, data) {
  // Ok
  return responseJSONStatus(reponse, data, 200);
}
/**
 * Created
 * @param {*} reponse 
 * @param {*} data 
 */


function responseJSON201Status(reponse, data) {
  // Created
  return responseJSONStatus(reponse, data, 201);
}
/**
 * Accepted
 * @param {*} reponse 
 * @param {*} data 
 */


function responseJSON202Status(reponse, data) {
  return responseJSONStatus(reponse, data, 202);
}
/**
 * Internal Server Error
 * @param {*} response 
 */


function responseJSON500Status(response) {
  return responseJSONStatus(response, {
    message: CONTROLLER_SERVER_ERROR_MSG
  }, 500);
}