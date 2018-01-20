var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    rename = require( 'gulp-rename' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    notify = require( 'gulp-notify' );

var postcss = require( 'gulp-postcss' );

var svg = require( 'postcss-svg' )();

module.exports = function() {
  return gulp.src( 'assets/scss/*.scss' )
    .pipe( sass( {
      outputStyle: 'compressed'
    } ).on( 'error', sass.logError ) )
    .pipe( autoprefixer( {
      browsers: [ 'last 2 versions', 'ie >= 9', 'and_chr >= 2.3' ],
      cascade: false
    } ) )

    .pipe( postcss( [ svg ] ) )

    .pipe( rename( 'style.min.css' ) )
    .pipe( gulp.dest( 'src/assets/css' ) )
    .pipe( notify( { message: 'CSS task complete' } ) );
};

