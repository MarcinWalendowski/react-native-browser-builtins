/*
 @provides buffer
 @polyfill
 */

module.exports = require('buffer');
global.Buffer = global.Buffer || module.exports.Buffer;
