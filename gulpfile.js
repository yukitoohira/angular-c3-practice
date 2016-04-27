"use strict";
var gulp = require('gulp');
var concat = require('gulp-concat');
var browser = require('browser-sync');
var ngTemplateCache = require('gulp-angular-templatecache');
var del = require('del');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean', ()=> {
  return del(['dist/**/*']);
});

gulp.task('lib', ()=> {
  return gulp.src('bower_components/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('all', function (callback) {
  return runSequence(
    'clean',
    ['angular', 'templates', 'htdocs', 'lib'],
    callback
  );
});

gulp.task('angular', ()=> {
  return gulp.src('src/script/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist'));
});


gulp.task('serve', ()=> {
  browser.init({
    port:5543,
    server: {
      baseDir: "./dist/"
    }
  });
  gulp.watch(['src/script/**/*.js', 'src/htdocs/**/*.html', 'src/templates/**/*.html'], ["all-reload"]);
});

gulp.task('all-reload', function (callback) {
  return runSequence(
    'all', 'reload', callback
  );
});

gulp.task('templates', ()=> {
  return gulp.src('src/templates/**/*.html')
    .pipe(ngTemplateCache({
      module: 'app'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('reload', ()=> {
  return browser.reload();
});

gulp.task('htdocs', ()=> {
  return gulp.src('src/htdocs/index.html')
    .pipe(gulp.dest('./dist'));
});