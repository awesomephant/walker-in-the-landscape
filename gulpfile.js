const gulp = require("gulp");
const srcset = require("gulp-srcset").default;
const using = require('gulp-using');
const mozjpeg = require('imagemin-mozjpeg');

const imageDest = './assets/images/'
const sizes = [1200]

gulp.task('images', () =>
    gulp.src('./documentation/images/*.{jpg,jpeg,JPG,JPEG,png,PNG}')
        .pipe(srcset([
            {
                processing: {
                    jpg: {
                        quality: 90
                    }
                },
                optimization: {
                    jpg: mozjpeg({
                        quality: 90
                    }),
                },
                width: sizes,
                // Change the following to "skipOptimization: true" to speed up conversion.
                skipOptimization: false,
            }
        ]))
        .pipe(using({ prefix: 'Writing', color: 'yellow' }))
        .pipe(gulp.dest(imageDest))
);