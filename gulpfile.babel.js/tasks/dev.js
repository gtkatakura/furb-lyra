import gulp from 'gulp';
import config from '../config';

gulp.task('set-dev-node-env', () => {
  process.env.NODE_ENV = config.env = 'development';
});

gulp.task('dev', ['set-dev-node-env', 'server']);
