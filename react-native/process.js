/*
 @provides process
 @polyfill
 */

module.exports = process = require('process/browser');

process.binding = function (name) {
    switch (name) {
        case 'http_parser':
            return require('http-parser-js');
            break;
        default:
            throw new Error('process.binding is not supported for ' + name);
            break;
    }
};

global.process = module.exports;
