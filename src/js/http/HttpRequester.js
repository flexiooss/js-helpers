/**
 * @interface
 */
export class HttpRequester {
  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @return {ResponseDelegate}
   */
  get(callback,) {
  }

  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} [contentType=null]
   * @param {?string} [body=null]
   * @return {ResponseDelegate}
   */
  post(callback, contentType = null, body = null) {
  }

  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  put(callback, contentType = null, body = null) {
  }

  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @param {?string} contentType
   * @param {?string} body
   * @return {ResponseDelegate}
   */
  patch(callback, contentType = null, body = null) {
  }

  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @return {ResponseDelegate}
   */
  delete(callback) {
  }

  /**
   * @param {ExecutorRequesterInterface~executionClb} callback
   * @return {ResponseDelegate}
   */
  head(callback) {
  }

  /**
   * @param {string} name
   * @param {string} value
   * @return {HttpRequester}
   */
  parameter(name, value) {
  }

  /**
   * @param {string} name
   * @param {Array<string>} values
   * @return {HttpRequester}
   */
  arrayParameter(name, values) {
  }

  /**
   * @param {string} name
   * @param {string} value
   * @return {HttpRequester}
   */
  header(name, value) {
  }

  /**
   * @param {string} name
   * @param {Array<string>} values
   * @return {HttpRequester}
   */
  arrayHeader(name, values) {
  }

  /**
   * @param {string} path
   * @return {HttpRequester}
   */
  path(path) {
  }
}
