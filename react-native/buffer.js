/*
 @provides buffer
 @polyfill
 */

module.exports = require('../node_modules/buffer');
global.Buffer = module.exports.Buffer;
