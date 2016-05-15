var dest = './public',
    src = './src';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var webpack = require("webpack");
var gutil = require("gulp-util");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.config');

/**
 * Gulp tasks
 * **/
var cssTask = require('./gulp/css');
var fontsTask = require('./gulp/font');
var imgsTask = require('./gulp/image');
var imgsCompressTask = require('./gulp/image-compress');
var cleanTask = require('./gulp/clean');
var revisionCssTask = require('./gulp/revision-css');
var revisionJsTask = require('./gulp/revision-js');
var webpackTask = require('./gulp/webpack');
var vendorTask = require('./gulp/vendor');

gulp.task('webpacker', webpackTask(webpackConfig));

gulp.task('css', cssTask(src, dest, '/scss/style.scss'));

gulp.task('fonts', fontsTask(src, dest));

gulp.task('images', imgsTask(src, dest));

gulp.task('images-compress', imgsCompressTask(src, dest));

gulp.task('vendor-js', vendorTask(src, dest));

gulp.task('clean', cleanTask(dest));

gulp.task('build-phase-1', ['webpacker', 'images-compress', 'css', 'fonts', 'vendor-js'], function () {
});

gulp.task("revision-css", ['build-phase-1'], revisionCssTask(dest));

gulp.task("revision-js", revisionJsTask(dest));

gulp.task('clean-all', ['clean'], function () {
});

gulp.task('default', ['images', 'css', 'fonts', 'vendor-js'], function () {
    gulp.watch(src + '/scss/**/*.scss', ['css']);
    gulp.watch(src + '/images/**/*.*', ['imgs']);
    gulp.watch(src + '/js/*.*', ['vendor-js']);
});