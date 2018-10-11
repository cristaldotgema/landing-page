//es6 syntax
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
//const browserify = require('browser-sync').create();

//top level functions for gulp
/*
gulp.task = defines tasks
gulp.src = files to use
gulp.dest = destination folder to put the results of the task
gulp.watch - watch files and folders for changes
*/

gulp.task('message', function() {
  return console.log('gulp is running, ok');
});

//copy html files from src to dist folder
gulp.task('copyHtml', function() {
  gulp.src('src/*html').pipe(gulp.dest('dist'));
});

//compress images from src img folder and put in dist img folder
gulp.task('imageMin', () =>
  gulp
    .src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

gulp.task('sass', function() {
  gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass']);
