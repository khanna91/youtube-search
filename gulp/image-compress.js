var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
module.exports = function (src, dest) {
    return function () {
        if(true) {
            return gulp.src(src + '/images/**/*.*')
                .pipe(imagemin({
                    verbose: true,
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()]
                }))
                .pipe(gulp.dest(dest + '/images'));
        } else {
            return gulp.src(src + '/images/**/*.*')
                .pipe(gulp.dest(dest + '/images'));
        }
    };
};
