var gulp = require('gulp');

// Define variables.
var autoprefixer  = require('autoprefixer');
var babel         = require('gulp-babel');
var cleancss      = require('gulp-clean-css');
var concat        = require('gulp-concat');
var del           = require('del');
var gulp          = require('gulp');
var postcss       = require('gulp-postcss');
var runSequence   = require('run-sequence');
var sass          = require('gulp-sass');
var uglify        = require('gulp-uglify');

/**
 * ----------------------------------------
 *  VARIABLES
 * ----------------------------------------
 */
var paths = {
  src: 'src/',
  dest: 'dist/',
  bulma: 'node_modules/bulma/sass/utilities/',
  jsPattern: '**/*.js'
}
var globalSassFile = 'bulma-extensions.sass';
var bulmaSassFile  = '_all.sass';
var mainSassFile   = 'extensions.sass';
var distCssFile    = 'bulma-extensions.min.css';
var mainJsFile     = 'extensions.js';
var distJsFile     = 'extensions.min.js';

/**
 * ----------------------------------------
 *  STYLESHEETS
 * ----------------------------------------
 */

// Uses Sass compiler to process styles, adds vendor prefixes, minifies, then
// outputs file to the appropriate location.
gulp.task('build:styles', ['build:styles:copy'], function() {
  return gulp.src([paths.bulma + bulmaSassFile, paths.src + mainSassFile])
    .pipe(concat(globalSassFile))
    .pipe(sass({
      style: 'compressed',
      includePaths: [paths.bulma]
    }))
    .pipe(concat(distCssFile))
    .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.dest));
});

// Copy original sass file to dist
gulp.task('build:styles:copy', function() {
  return gulp.src(paths.src + mainSassFile)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean:styles', function(callback) {
  del([
    paths.dest + mainSassFile,
    paths.dest + distCssFile
  ]);
  callback();
});

/**
 * ----------------------------------------
 *  JAVASCRIPT
 * ----------------------------------------
 */

// Concatenates and uglifies global JS files and outputs result to the
// appropriate location.
gulp.task('build:scripts', ['build:scripts:copy'], function() {
  return gulp
    .src([paths.src + paths.jsPattern])
    .pipe(concat(distJsFile))
    .pipe(babel({
      "presets": [
        ["@babel/preset-env",  {
          "targets": {
            "browsers": ["last 2 versions"]
          }
        }]
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dest));
});

// Copy original sripts file to dist
gulp.task('build:scripts:copy', function() {
  return gulp.src(paths.src + mainJsFile)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean:scripts', function(callback) {
  del([
    paths.dest + mainJsFile,
    paths.dest + distJsFile
  ]);
  callback();
});

// Deletes the entire _site directory.
gulp.task('clean', ['clean:scripts', 'clean:styles']);

/**
 * ----------------------------------------
 *  GLOBAL BUILD
 * ----------------------------------------
 */
gulp.task('build', function(callback) {
  runSequence('clean',
    ['build:scripts', 'build:styles'],
    callback);
});

/**
 * ----------------------------------------
 *  DEFAULT TASK
 * ----------------------------------------
 */
gulp.task('default', ['build']);
