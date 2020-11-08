const config = require('../config');
const del = require('del');

/**
 * 删除文件夹或文件相关方法
 */

const clean = function() {
  return del(config.clean.html, config.clean.js, config.clean.css, config.clean.rev);
};
const cleanImg = function() {
  return del(config.clean.img);
};
const cleanHtml = function() {
  return del(config.clean.html);
};
const cleanCss = function() {
  return del(config.clean.css);
};
const cleanJs = function() {
  return del(config.clean.js);
};
module.exports = {
  clean,
  cleanImg,
  cleanHtml,
  cleanJs,
  cleanCss
};