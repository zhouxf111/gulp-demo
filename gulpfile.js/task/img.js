const { src, dest } = require('gulp');
const  imgmin = require('gulp-tinypng-nokey'); // 图片压缩
// const browserSync = require('browser-sync').create(); // 自动刷新文件
const config = require('../config');

module.exports = img = function() {
  return src(config.images.src)
  .pipe(imgmin()) // 图片压缩
  .pipe(dest(config.images.dest));
  // .pipe(browserSync.reload({stream: true})); // 实时刷新
};