'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
//compile
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});
//watch
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
})