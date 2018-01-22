var gulp = require( 'gulp' ),
  eslint = require( 'gulp-eslint' ),
  concat = require( 'gulp-concat' ),
  uglify = require( 'gulp-uglify' ),
  rename = require( 'gulp-rename' ),
  notify = require( 'gulp-notify' ),
  babel = require( 'gulp-babel' );

module.exports = function() {
  return gulp.src( 'assets/js/*.js' )
    .pipe( eslint() )
    .pipe( concat( 'scripts.js' ) )
    .pipe( babel() )
    .pipe( uglify() )
    .pipe( rename( 'scripts.min.js' ) )
    .pipe( gulp.dest( 'src/assets/js' ) )
    .pipe( notify( { message: 'JS task complete' } ) );
};
