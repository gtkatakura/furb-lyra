import gulp from 'gulp';
import bower from 'gulp-bower';

gulp.task('bower', () => {
  return bower('client/src/bower_components')
    .pipe(gulp.dest('client/dist/bower_components'));
});
