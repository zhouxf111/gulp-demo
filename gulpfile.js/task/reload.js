const browserSync = require('browser-sync').create(); // 自动刷新文件

module.exports = reload = function(cb) {
  browserSync.reload();
  cb();
};