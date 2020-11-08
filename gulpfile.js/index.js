const { series, parallel } = require('gulp');

const clean = require('./task/clean');
const css = require('./task/css');
const js = require('./task/js');
const rev = require('./task/rev');
const html = require('./task/html');
const img = require('./task/img');
const devServer = require('./task/server');
const zipPck = require('./task/zip');
const watchTask = require('./task/watch'); // 单独引入watch，不起作用

// exports.default = series(clean.clean, parallel(css, js, html), rev);
exports.default = series(clean.clean, parallel(css, js, html), rev, devServer);
exports.img = series(clean.cleanImg, img);
exports.zip = zipPck;