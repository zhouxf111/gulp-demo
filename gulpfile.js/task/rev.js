const { src, dest } = require('gulp');
const revCollector = require('gulp-rev-collector'); // 替换被gulp-rev改名的文件名
const browserSync = require('browser-sync').create(); // 自动刷新文件
const config = require('../config');

/**
 *  修改html中被gulp-rev改名的文件名
 */
module.exports = rev = function() {
  return src([config.rev.src, config.rev.html])
    .pipe(revCollector()) // 替换html中对应的记录
    .pipe(dest(config.dest));
    // .pipe(browserSync.reload({stream: true})); // 实s时刷新
};