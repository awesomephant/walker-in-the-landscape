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
                format: ['webp'],
                width: sizes,
                skipOptimization: false,
            }
        ]))
        .pipe(using({ prefix: 'Writing', color: 'yellow' }))
        .pipe(gulp.dest(imageDest))
);