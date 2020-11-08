const { src, dest } = require('gulp');
const zip = require('gulp-zip'); // 压缩打包
const config = require('../config');

/**
 *  压缩成zip
 */
module.exports = function() {
  return src(config.dest + '{js/**,css/**,images/**,**/*.html}')
    .pipe(zip('dist.zip'))
    .pipe(dest(config.dest));
};