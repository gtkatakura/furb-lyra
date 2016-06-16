import gulp from 'gulp';
import config from '../config';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';
import browserSync from 'browser-sync';

gulp.task('scripts', () => {
  return gulp.src(config.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.stream());
});
