var gulp = require('gulp');
module.exports = function (src, dest) {
    return function () {
        return gulp.src(src + '/fonts/*.*')
            .pipe(gulp.dest(dest + '/fonts'));
    };
};
