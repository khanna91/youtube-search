var gulp = require('gulp');
var rev = require('gulp-rev');
module.exports = function (dest) {
    return function () {
        return gulp.src([dest + "/js/**/*.js"])
            .pipe(rev())
            .pipe(gulp.dest(dest + '/js'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./'))
    };
};
