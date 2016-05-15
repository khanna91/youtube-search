var gulp = require('gulp');
var rev = require('gulp-rev');
module.exports = function (dest) {
    return function () {
        return gulp.src([dest + "/css/**/*.css"])
            .pipe(rev())
            .pipe(gulp.dest(dest + '/css'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./'))
    };
};