/*
 @provides timers
 @polyfill
 */

module.exports = require('../builtin/timers');
for (key in module.exports) {
    global[key] = module.exports[key];
}
