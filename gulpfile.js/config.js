const src = './src';
const dist = './dist';

module.exports = {
  dest: dist + '/',
  images: {
    src: src + '/images/**/*',
    dest: dist + '/images'
  },
  js: {
    src: src + '/js/**/*',
    dest: dist + '/js',
    rev: dist + '/rev-js'
  },
  html: {
    src: src + '/**/*.html'
  },
  css: {
    src: src + '/css/**/*',
    dest: dist + '/css',
    rev: dist + '/rev-css'
  },
  clean: {
    html: dist + '/**/*.html',
    css: dist + '/css/*',
    js: dist + '/js/*',
    img: dist + '/images/*',
    rev: dist + '/**/*.json'
  },
  rev: {
    src: dist + '/**/*.json',
    js: dist + '/rev-js/*.json',
    css: dist + '/rev-css/*.json',
    html: dist + '/**/*.html'
  }
};