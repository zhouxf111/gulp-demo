const { series } = require('gulp');
const browserSync = require('browser-sync').create(); // 自动刷新文件
const watch = require('gulp-watch'); //监听文件

const config = require('../config');
const css = require('./css');
const js = require('./js');
const html = require('./html');
const img = require('./img');
const clean = require('./clean');
const rev = require('./rev');
const { cleanCss, cleanImg } = require('./clean');
// const reload = require('./reload');

function reload(cb) {
  browserSync.reload();
  cb();
}

module.exports = server = function(cb) {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html'
    },
    port: 8080,
    open: 'external',
    injectChanges: true
  });

  watch(config.js.src, series(clean.cleanJs, js));
  watch(config.css.src, series(cleanCss, css));
  watch(config.images.src, series(cleanImg, img, reload));
  watch([config.rev.src, config.html.src], series(html, rev, reload));

  cb();
};