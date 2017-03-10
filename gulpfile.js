var gulp = require('gulp');

gulp.task('initdb', function () {
  // Run script to initialize database
  require('./database/initialize');
});
