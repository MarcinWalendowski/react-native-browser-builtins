'use strict';

module.exports = {};
[
    'global',
    // 'console',  // provided by react-native
    'constants',
    'crypto',
    'http',
    'buffer',
    'os',
    'vm',
    'zlib',
    'assert',
    'child_process',
    'cluster',
    'dgram',
    'dns',
    'domain',
    'events',
    'fs',
    'https',
    'module',
    'net',
    'path',
    'process',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'stream',
    'string_decoder',
    'sys',
    'timers',
    'tls',
    'tty',
    'url',
    'util',
    '_shims',
    '_stream_duplex',
    '_stream_readable',
    '_stream_writable',
    '_stream_transform',
    '_stream_passthrough'
].forEach(function (key) {
    module.exports[key] = require('./react-native/' + key + '.js');
});


// manually add core which are provided by modules
module.exports = {
    "domain": require('domain-browser'),
    "events": require('events'),
    "path": require('path-browserify'),
    "process": require('process/browser'),
    "punycode":  require('punycode'),
    "string_decoder": require('string_decoder'),
    "timers": localModule('timers'),
    "tls": localModule('tls'),
    "tty": require('tty-browserify'),
    "url": localModule('url'),
    "util": localModule('util'),
    "_shims": localModule('_shims'),
    "_stream_duplex": localModule('_stream_duplex'),
    "_stream_readable": localModule('_stream_readable'),
    "_stream_writable": localModule('_stream_writable'),
    "_stream_transform": localModule('_stream_transform'),
    "_stream_passthrough": localModule('_stream_passthrough')
};
