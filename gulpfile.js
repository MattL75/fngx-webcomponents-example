var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
  return gulp.src('./dist/test-web-component/*.js')
    .pipe(concat('elements.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('rename', function() {
  return gulp.src('./dist/test-web-component/styles.css')
    .pipe(rename('elements.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['concat', 'rename']);
