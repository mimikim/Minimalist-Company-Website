var gulp = require( 'gulp' );

module.exports = function( tasks ) {

  // for each js file, register task
  tasks.forEach( function( name ) {

    gulp.task( name, require( './tasks/' + name ) );

  } );

  return gulp;
};
