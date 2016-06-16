import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('html', () => {
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
    .pipe(browserSync.stream());
});
