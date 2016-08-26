// Import all required modules
var gulp       = require('gulp');                   // The skeleton, it's responsible for the build process
var gutil      = require('gulp-util');              // Responsible for console logging output of build process
var source     = require('vinyl-source-stream');    // Used for throwing text files from build process to the other
var browserify = require('browserify');             // Responsible for figuring out what part of our code depends on other parts of our code
var watchify   = require('watchify');               // Automatically reruns gulp whenever the code changes
var reactify   = require('reactify');               // Works in conjunction with browserify, converting JSX into JS

gulp.task('default', function() {
  var bundler = watchify(browserify({
    entries:    ['./src/app.jsx'],
    transform:  [reactify],
    extensions: ['.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }))

  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle()
      .on('error', gutil.log.bind(gutil, 'browserify Error'))
      .pipe(source('main.js'))
      .pipe(gulp.dest('./'));
  };

  build()
  bundler.on('update', build)
});
