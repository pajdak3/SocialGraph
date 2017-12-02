
var gulp = require('gulp'),
	sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat');
  
var sassPaths = [
      'scss/**/*.scss',
      'bower_components/foundation-sites/scss',
      'bower_components/motion-ui/src'],
    jsFiles = [
        'js/vendors/blazy.min.js',
        'js/app.js'],
    watch = [
        'js/app.js',
        'scss/**/*.scss',
        'bower_components/foundation-sites/scss/**/*.scss',
        'bower_components/motion-ui/src/**/*.scss'];

var css_destPath = '../dist/css';
var js_destPath = '../dist/js';

gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
      .pipe(sass({
        includePaths: sassPaths,
        errLogToConsole: true
      })
      .on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['> 1%', 'last 2 versions', 'ie >= 9']
      }))
      .pipe(gulp.dest(css_destPath))
      .pipe(cssnano())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest(css_destPath));
});

gulp.task('js', function(){
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(js_destPath))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(js_destPath));
});

gulp.task('default', ['sass', 'js'], function () {
  gulp.watch(watch, ['sass','js']);
});