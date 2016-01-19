/*
 @provides buffer
 @polyfill
 */

module.exports = require('buffer');
global.Buffer = module.exports.Buffer;
