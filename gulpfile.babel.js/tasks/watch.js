import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
  gulp.watch(config.scripts.src, ['scripts']);
});
