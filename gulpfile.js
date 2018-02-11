var package                     = require('./package.json')
var gulp                        = require('gulp');

// Define variables.
var autoprefixer                = require('autoprefixer');
var babel                       = require('gulp-babel');
var bump                        = require('gulp-bump');
var camelCase                   = require('camelcase');
var cleancss                    = require('gulp-clean-css');
var concat                      = require('gulp-concat');
var conventionalChangelog       = require('gulp-conventional-changelog');
var conventionalGithubReleaser  = require('conventional-github-releaser');
var del                         = require('del');
var fs                          = require('fs');
var git                         = require('gulp-git');
var gutil                       = require('gulp-util');
var postcss                     = require('gulp-postcss');
var rollup                      = require('gulp-better-rollup');
var runSequence                 = require('run-sequence');
var sass                        = require('gulp-sass');
var sourcemaps                  = require('gulp-sourcemaps');
var spawn                       = require('child_process').spawn;
var minify                      = require('gulp-babel-minify');

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
gulp.task('build:scripts', function() {
  return gulp
    .src([paths.src + paths.jsPattern])
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(rollup({
        plugins: [babel({
          babelrc: false,
          sourceMaps: true,
          exclude: 'node_modules/**',
          presets: [
            ["@babel/preset-env",  {
              "modules": false,
              "targets": {
                "browsers": gutil.env.babelTarget ? gutil.env.babelTarget : ["last 2 versions"]
              }
            }]
          ]
        })]
      }, {
        format: gutil.env.jsFormat ? gutil.env.jsFormat : 'iife',
        name: camelCase(package.name)
      }
    ))
    .pipe(concat(globalJsFile))
    .pipe(gulp.dest(paths.dest))
    .pipe(concat(distJsFile))
    .pipe(minify().on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString())
    }))
    .pipe(sourcemaps.write())
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
