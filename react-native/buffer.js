/*
 @provides buffer
 @polyfill
 */

module.exports = require('buffer/index');
global.Buffer = module.exports.Buffer;
