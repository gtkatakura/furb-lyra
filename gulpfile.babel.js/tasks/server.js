import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('server', ['build', 'watch'], () => {
  browserSync(config.browserSync);
});
