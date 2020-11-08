const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create(); // 自动刷新文件
const htmlmin = require('gulp-htmlmin'); // 压缩html
const config = require('../config');

module.exports = html = function() {
  let options = {  
    removeComments: true, //清除HTML注释  
    collapseWhitespace: true, //压缩HTML  
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"  
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };  
  return src(config.html.src)
    .pipe(htmlmin(options))
    .pipe(dest(config.dest));
    // .pipe(browserSync.reload({stream: true})); // 实时刷新
};