
const pkg                 = require('./package.json');
const gulp                = require('gulp');
const webpack             = require('webpack');
const webpackStream       = require('webpack-stream');

const autoprefixer        = require('autoprefixer');
const camelCase           = require('camelcase');
const cleancss            = require('gulp-clean-css');
const colors              = require('ansi-colors');
const concat              = require('gulp-concat');
const del                 = require('del');
const fs				  = require('fs');
const log                 = require('fancy-log');
const nop                  = require('gulp-nop');
const postcss             = require('gulp-postcss');
const sass                = require('gulp-sass');
const uglify              = require('gulp-uglify');

/**
 * ----------------------------------------
 *  VARIABLES
 * ----------------------------------------
 */
const paths = {
	src:  'src/',
	dist: 'dist/',
	bulma: 'node_modules/bulma/sass/utilities/'
};
const config = {
	sass: {
		input: 'index.sass',
		dependencies: ['node_modules/bulma/sass/utilities/_all.sass'],
		output: {
			filename: pkg.name,
			format: 'compressed'
		},
		source: paths.src + 'sass/',
		destination: paths.dist + 'css/'
	},
	javascript: {
		input: 'index.js',
		output: {
			name: camelCase(pkg.name),
			filename: pkg.name,
			format: 'umd'
		},
		source: paths.src + 'js/',
		destination: paths.dist + 'js/'
	}
};

/**
 * ----------------------------------------
 *  BUILD STYLESHEETS TASKS
 * ----------------------------------------
 */
// Uses Sass compiler to process styles, adds vendor prefixes, minifies, then
// outputs file to the appropriate location.
gulp.task('build:styles', function() {
	if (fs.existsSync(config.sass.source + config.sass.input)) {
		return gulp
			.src(config.sass.dependencies.concat([config.sass.source + config.sass.input]))
			.pipe(concat(config.sass.output.filename + '.sass'))
			.pipe(sass({
				style: config.sass.output.format,
				trace: true,
				loadPath: [config.sass.source],
				includePaths: ['node_modules/bulma/sass/utilities/']
			}))
			.pipe(concat(config.sass.output.filename + (config.sass.output.format === 'compressed' ? '.min' : '') + '.css'))
			.pipe(postcss([autoprefixer({browsers: pkg.broswers})]))
			.pipe(cleancss())
			.pipe(gulp.dest(config.sass.destination));
	} else {
		return gulp.src('.').pipe(nop());
	}
});

// Copy original sass file to dist
gulp.task('build:styles:copy', function() {
	if (fs.existsSync(config.sass.source + config.sass.input)) {
		return gulp.src(config.sass.source + config.sass.input)
			.pipe(concat(config.sass.output.filename + '.sass'))
			.pipe(gulp.dest(config.sass.destination));
	} else {
		return gulp.src('.').pipe(nop());
	}
});

gulp.task('clean:styles', function() {
	return del([
		config.sass.destination + config.sass.output.filename + '.sass',
		config.sass.destination + config.sass.output.filename + (config.sass.output.format === 'compressed' ? '.min' : '') + '.css'
	]);
});

/**
 * ----------------------------------------
 *  BUILD JAVASCRIPT TASKS
 * ----------------------------------------
 */

// Concatenates and uglifies global JS files and outputs result to the
// appropriate location.
gulp.task('build:scripts', function() {
	if (fs.existsSync(config.javascript.source + config.javascript.input)) {
		return gulp
			.src(config.javascript.source + config.javascript.input)
			.pipe(webpackStream({
				output: {
					filename: config.javascript.output.filename + '.js',
					library: config.javascript.output.name,
					libraryTarget: config.javascript.output.format,
					libraryExport: 'default'
				},
				module: {
					rules: [
						{
							test: /\.(js|jsx)$/,
							exclude: /(node_modules)/,
							loader: 'babel-loader',
							options: {
								babelrc: './babelrc'
							}
						},
					],
				}
			}), webpack)
			.pipe(concat(config.javascript.output.filename + '.js'))
			.pipe(gulp.dest(config.javascript.destination))
			.pipe(concat(config.javascript.output.filename + '.min.js'))
			.pipe(uglify().on('error', function(err) {
				log(colors.red('[Error]'), err.toString());
			}))
			.pipe(gulp.dest(config.javascript.destination)
				.on('error', function(err) {
					log(colors.red('[Error]'), err.toString());
				})
			);
	} else {
		return gulp.src('.').pipe(nop());
	}
});

gulp.task('clean:scripts', function() {
	return del([
		config.javascript.destination + config.javascript.output.filename + '.js',
		config.javascript.destination + config.javascript.output.filename + '.min.js'
	]);
});


/**
 * ----------------------------------------
 *  GLOBAL CLEAN
 * ----------------------------------------
 */
// Deletes the entire dist directory.
gulp.task('clean', function() {
	return del(paths.dist);
});

/**
 * ----------------------------------------
 *  GLOBAL BUILD
 * ----------------------------------------
 */
gulp.task('build', gulp.series('clean', 'build:styles', 'build:styles:copy', 'build:scripts', function(callback) {
	callback();
}));

/**
 * ----------------------------------------
 *  DEFAULT TASK
 * ----------------------------------------
 */
gulp.task('default', gulp.series('build', function(done) {
	done();
}));
