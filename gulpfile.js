var package                     = require('./package.json')
var gulp                        = require('gulp');

// Define variables.
var autoprefixer                = require('autoprefixer');
var babel                       = require('gulp-babel');
var bump                        = require('gulp-bump');
var cleancss                    = require('gulp-clean-css');
var concat                      = require('gulp-concat');
var conventionalChangelog       = require('gulp-conventional-changelog');
var conventionalGithubReleaser  = require('conventional-github-releaser');
var del                         = require('del');
var fs                          = require('fs');
var git                         = require('gulp-git');
var gutil                       = require('gulp-util');
var postcss                     = require('gulp-postcss');
var runSequence                 = require('run-sequence');
var sass                        = require('gulp-sass');
var spawn                       = require('child_process').spawn;
var uglify                      = require('gulp-uglify');

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
var bulmaSassFile  = '_all.sass';
var globalSassFile = package.name + '.sass';
var globalJsFile   = package.name + '.js';
var mainSassFile   = 'extension.sass';
var mainJsFile     = 'extension.js';
var distCssFile    = package.name + '.min.css';
var distJsFile     = package.name + '.min.js';

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
    .pipe(concat(globalSassFile))
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
          "modules": "umd",
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
    .pipe(concat(globalJsFile))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean:scripts', function(callback) {
  del([
    paths.dest + mainJsFile,
    paths.dest + distJsFile
  ]);
  callback();
});

// Deletes the entire dist directory.
gulp.task('clean', ['clean:scripts', 'clean:styles'], function(callback) {
  del(paths.dest);
  callback();
});

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

/**
 * ----------------------------------------
 *  GENERATE CHANGELOG
 * ----------------------------------------
 */
gulp.task('changelog', function () {
  return gulp.src('CHANGELOG.md')
    .pipe(conventionalChangelog({
      preset: 'angular'
    }))
    .pipe(gulp.dest('./'));
});

/**
 * ----------------------------------------
 *  GENERATE GITHUB RELEASE
 * ----------------------------------------
 */
gulp.task('github:release', function(done) {
  conventionalGithubReleaser({
    type: "oauth",
    token: process.env.GITHUB_TOKEN
  }, {
    preset: 'angular'
  }, done);
});

/**
 * ----------------------------------------
 *  UPDATE
 * ----------------------------------------
 */
gulp.task('bump-version', function () {
  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({type: gutil.env.type ? gutil.env.type : 'patch' })
    .on('error', gutil.log))
    .pipe(gulp.dest('./'));
});


gulp.task('github:commit', function () {
  return gulp.src('.')
    .pipe(git.add())
    .pipe(git.commit('[Prerelease] Bumped version number'));
});

gulp.task('github:push', function (cb) {
  git.push('origin', 'master', cb);
});

gulp.task('github:create-new-tag', function (cb) {
  var version = getPackageJsonVersion();
  git.tag(version, 'Created Tag for version: ' + version, function (error) {
    if (error) {
      return cb(error);
    }
    git.push('origin', 'master', {args: '--tags'}, cb);
  });

  function getPackageJsonVersion () {
    // We parse the json file instead of using require because require caches
    // multiple calls so the version number won't be updated
    return JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  };
});

gulp.task('npm:publish', function (done) {
  spawn('npm', ['publish'], { stdio: 'inherit' }).on('close', done);
});

gulp.task('release', function (callback) {
  runSequence(
    'build',
    'bump-version',
    'changelog',
    'github:commit',
    'github:push',
    'github:create-new-tag',
    'github:release',
    'npm:publish',
    function (error) {
      if (error) {
        console.log(error.message);
      } else {
        console.log('RELEASE FINISHED SUCCESSFULLY');
      }
      callback(error);
    });
});
