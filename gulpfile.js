var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var react = require('gulp-react');

gulp.task('less', function() {
    return gulp.src(['./source/less/styles.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('react', function() {
    return gulp.src(['./source/js/*.js'])
        .pipe(react({
        	sourceMap: true
        }))
        .pipe(uglify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
    gulp.watch('./source/less/**/*.less', ['less']);
    gulp.watch('./source/js/**/*.js', ['react']);
});

gulp.task('default', ['less', 'react', 'watch']);