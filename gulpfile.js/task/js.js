const { src, dest } = require('gulp');

const rev = require('gulp-rev'); // 对文件名加MD5后缀
const browserSync = require('browser-sync').create(); // 自动刷新文件
// babel npm install --save-dev gulp-babel @babel/core @babel/preset-env
const babel = require('gulp-babel'); // 编译es6
const uglify = require('gulp-uglify'); // 压缩丑化js

const config = require('../config');

module.exports = js = function(cb) {
  return src([config.js.src, '!../src/js/*.min.js'])
    // 把src下面的文件经过babel转义
    .pipe(babel({ presets: ['@babel/env']}))
    // js压缩
    .pipe(uglify())
    .pipe(rev()) // 给文件加hash编码
    // 把源文件移动到dist下
    .pipe(dest(config.js.dest))
    // .pipe(browserSync.reload({stream: true})) // 实时刷新
    .pipe(rev.manifest()) // 生成一个rev-manifest,json 快照，记录MD5的文件改名前后的对应
    .pipe(dest(config.js.rev));
    // 把源文件，改为.min.js 
    // .pipe(rename({ extname: '.min.js'}))
};