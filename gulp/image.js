var gulp = require('gulp');
module.exports = function (src, dest) {
    return function () {
        return gulp.src(src + '/images/**/*.*')
            .pipe(gulp.dest(dest + '/images'));
    };
};
