var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

module.exports = function (src, dest, scssFile) {
    return function () {
        return gulp.src(src + scssFile)
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({browsers: ['last 5 versions', 'IE 9', '> 1%'], cascade: false}))
            .pipe(minifycss())
            .pipe(gulp.dest(dest + '/css/'));
    };
};