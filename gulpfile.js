var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var sassFiles = ['src/**/*.scss', 'src/*.scss'];

gulp.task('styles', function() {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./release/'));
});


gulp.task('watch',function() {
    gulp.watch(sassFiles,['styles']);
});

gulp.task('default', ['styles', 'watch']);