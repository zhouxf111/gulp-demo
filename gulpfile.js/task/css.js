const { src, dest } = require('gulp');

const cleanCSS = require('gulp-clean-css'); // 压缩css
const rev = require('gulp-rev'); // 对文件名加MD5后缀
const browserSync = require('browser-sync').create(); // 自动刷新文件
const sass = require('gulp-sass'); // 编译sass

const config = require('../config');

module.exports = css = function() {
  return src(config.css.src)
    .pipe(sass()) // 编译sass
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rev()) // 给文件加hash编码
    .pipe(dest(config.css.dest))
    // .pipe(browserSync.reload({stream: true})) // 实时刷新
    .pipe(rev.manifest()) // 生成一个rev-manifest.json 快照，记录MD5的文件改名前后的对应
    .pipe(dest(config.css.rev));
};