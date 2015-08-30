var gulp = require('gulp');
var babelify = require('babelify');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var htmlMinifier = require('gulp-html-minifier');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('lint', function () {
  return gulp.src(['./source/js/**/*.js', '!./source/js/vendor/**/*.js'])
        // eslint() attaches the lint output to the eslint property 
        // of the file object so it can be used by other modules. 
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console. 
        // Alternatively use eslint.formatEach() (see Docs). 
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on 
        // lint error, return the stream and pipe to failOnError last. 
        .pipe(eslint.failOnError());
});

gulp.task('js-dev', function () {
  return browserify('./source/js/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js/'));
});


gulp.task('js', function () {
  return browserify('./source/js/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./build/js/'))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('html', function () {
  return gulp.src('./source/*.html')
        .pipe(htmlMinifier({collapseWhitespace: true}))
        .pipe(gulp.dest('./build'))
});

gulp.task('watch', function () {
  gulp.watch('./source/js/**/*.js', ['js-dev']);
  gulp.watch('./source/*.html', ['html']);
});


gulp.task('build', ['js', 'html']);
gulp.task('default', ['watch', 'js-dev', 'html']);