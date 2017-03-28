var path = require('path');
var _root = path.resolve(__dirname, '..');

module.exports = {
    root: root
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.resolve.apply(path, [_root].concat(args));
}