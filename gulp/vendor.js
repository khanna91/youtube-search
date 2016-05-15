var gulp = require('gulp');
module.exports = function (src, dest) {
    return function () {
        return gulp.src(src + '/js/**/*.*')
            .pipe(gulp.dest(dest + '/js'));
    };
};