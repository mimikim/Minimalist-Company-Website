var gulp = require( 'gulp' ),
  notify = require( 'gulp-notify' ),
  svgmin = require( 'gulp-svgmin' ),
  svgstore = require( 'gulp-svgstore' );

module.exports = function() {
  return gulp.src( 'assets/svg/*.svg' )
    .pipe(svgmin({
      plugins: [{
        removeDoctype: true
      }, {
        removeComments: true
      }, {
        cleanupNumericValues: {
          floatPrecision: 2
        }
      }, {
        convertColors: {
          names2hex: false,
          rgb2hex: false
        }
      }]
    }))
    .pipe( gulp.dest( 'src/assets/svg' ) )
    .pipe( notify( { message: 'SVG task complete' } ) );
};

