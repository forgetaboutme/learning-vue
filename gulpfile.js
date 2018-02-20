var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
})

gulp.task('sass', function() {
  return gulp.src('/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});
