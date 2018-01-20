// watch task
var gulp = require('gulp');

module.exports = function() {
  gulp.watch( 'assets/js/*.js', [ 'js' ] );
  gulp.watch( 'assets/scss/**', [ 'css' ] );
  gulp.watch( 'assets/images/**', [ 'image' ] );
  gulp.watch( 'assets/svg/**', [ 'svg' ] );
};
