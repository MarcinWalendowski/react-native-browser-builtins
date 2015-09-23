[
    'global',   // necessary?
    'console',  // provided by react-native?
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
    'stream',  // should also include _stream_XXX classes? these are included in stream...
    'string_decoder',
    'sys',
    'timers',  // provided by react-native?
    'tls',
    'tty',
    'url',
    'util'
].forEach(function (key) {
    require('./react-native/' + key);
});
