const CONTROLLER_SERVER_ERROR_MSG = "Internal Server Error";

export function responseJSONStatus(response, data, code) {
  response.status(code);
  response.json(data);
  return response;
}

/**
 * Bad Request
 * @param {*} response 
 * @param {*} data 
 */
export function responseJSON400Status(response, data) {
  return responseJSONStatus(response, data, 400);
}

/**
 * Not found
 * @param {*} response 
 * @param {*} data 
 */
export function responseJSON404Status(response, data) {
  return responseJSONStatus(response, data, 404);
}

/**
 * Conflict
 * @param {*} response 
 * @param {*} data 
 */
export function responseJSON409Status(response, data) {
  return responseJSONStatus(response, data, 409);
}

/**
 * Ok
 * @param {*} reponse 
 * @param {*} data 
 */
export function responseJSON200Status(reponse, data) { // Ok
  return responseJSONStatus(reponse, data, 200);  
}


/**
 * Created
 * @param {*} reponse 
 * @param {*} data 
 */
export function responseJSON201Status(reponse, data) { // Created
  return responseJSONStatus(reponse, data, 201);  
}

/**
 * Accepted
 * @param {*} reponse 
 * @param {*} data 
 */
export function responseJSON202Status(reponse, data) {
  return responseJSONStatus(reponse, data, 202);  
}

/**
 * Internal Server Error
 * @param {*} response 
 */
export function responseJSON500Status(response) {
  return responseJSONStatus(response, {
    message: CONTROLLER_SERVER_ERROR_MSG
  }, 500);
}