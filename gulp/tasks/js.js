var gulp = require( 'gulp' ),
  jshint = require( 'gulp-jshint' ),
  concat = require( 'gulp-concat' ),
  uglify = require( 'gulp-uglify' ),
  rename = require( 'gulp-rename' ),
  notify = require( 'gulp-notify' );

module.exports = function() {
  return gulp.src( 'assets/js/*.js' )
    .pipe( jshint() )
    .pipe( jshint.reporter( 'default' ) )
    .pipe( concat( 'scripts.js' ) )
    .pipe( uglify() )
    .pipe( rename( 'scripts.min.js' ) )
    .pipe( gulp.dest( 'src/assets/js' ) )
    .pipe( notify( { message: 'JS task complete' } ) );
};
