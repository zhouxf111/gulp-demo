const { src, series } = require('gulp');
const watch = require('gulp-watch'); //监听文件
const browserSync = require('browser-sync').create();

const config = require('../config');
const css = require('./css');
const js = require('./js');
const html = require('./html');
const img = require('./img');
const { cleanCss, cleanImg, cleanJs } = require('./clean');
const rev = require('./rev');

function reload(cb) {
  browserSync.reload();
  cb();
}

module.exports = watchTask = function(cb) {
  watch(config.js.src, series(cleanJs, js));
  watch(config.css.src, series(cleanCss, css));
  watch(config.images.src, series(cleanImg, img));

  watch([config.rev.src, config.html.src], series(html, rev, reload));
  cb();
};