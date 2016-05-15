var gulp = require('gulp');
var clean = require('gulp-clean');
module.exports = function (dest) {
    return function () {
        return gulp.src(dest, {read: false})
            .pipe(clean());
    };
};
