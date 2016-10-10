const gulp = require('gulp');
const eslint = require('gulp-eslint');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const iife = require('gulp-iife');
const del = require('del');

const babelConfig = require('./babel');

gulp.task('build', ['clean', 'lint'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfig))
    .pipe(iife())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./lib'));
});

gulp.task('clean', function () {
  return del([
    'lib/**/*',
  ], { dot: true });
});

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(eslint(require('./eslint-rules')))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', ['build']);
