/*
 @provides process
 @polyfill
 */

module.exports = require('process/browser');
global.process = global.process || module.exports;
