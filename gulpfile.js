var gulp = require('gulp');
var sass = require('gulp-sass'); // To compile the .scss files in .css
var plumber = require('gulp-plumber'); // Avoid crashes when errors

//Defining the task to transform SCSS into CSS
gulp.task('styles', function(){
  gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

//Watch task (to keep executing style on .scss file change)
gulp.task('default', ['styles'], function() {
    gulp.watch('src/sass/**/*.scss',['styles']);
});
