var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  wait = require('gulp-wait');

// Compile Sass
gulp.task('sass', function () {
  return gulp.src('./styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(wait(200))
    .pipe(sass({
      includePaths: ['./styles/**/{*.scss,_*.scss}'],
      outputStyle: ''
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist:  ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
});

// Task runner shit
gulp.task('watch', function () {
  gulp.watch('./styles/**/{*.scss,_*.scss}', gulp.series('sass'));
});

// $gulp or $gulp watch
gulp.task('default', gulp.series('watch'));
