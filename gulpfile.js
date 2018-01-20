// modular gulp tasks!

var gulp = require( './gulp' )( [
  'image',
  'svg',
  'css',
  'js',
  'watch'
] );

gulp.task( 'default', [ 'image', 'svg', 'css', 'js', 'watch' ] );
