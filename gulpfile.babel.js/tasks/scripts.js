import config from '../config';
import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('scripts', () => {
  return gulp.src(config.src)
    .pipe(eslint())
    .pipe(eslint.format());
});
