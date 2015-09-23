/*
 @provides console
 @polyfill
 */

module.exports = require('console-browserify');
global.console = global.console || module.exports;
