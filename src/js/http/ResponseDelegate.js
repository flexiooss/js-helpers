/**
 * @interface
 */
export class ResponseDelegate {
  /**
   * @return {number}
   */
  code() {
  }

  /**
   * @return {Blob}
   */
  payload() {
  }

  /**
   *
   * @param {string} name
   * @return {Array<string>}
   */
  header(name) {
  }

  /**
   * @return {string}
   */
  contentType() {
  }
}
