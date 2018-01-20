var gulp = require( 'gulp' ),
  imagemin = require( 'gulp-imagemin' ),
  changed = require( 'gulp-changed' ),
  notify = require( 'gulp-notify' );

module.exports = function() {
  return gulp.src( 'assets/images/**' )
    .pipe( changed('src/assets/images' ) )
    .pipe( imagemin() )
    .pipe( gulp.dest( 'src/assets/images' ) )
    .pipe( notify( { message: 'Image task complete' } ) );
};

