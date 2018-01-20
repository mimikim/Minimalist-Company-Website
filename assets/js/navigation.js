// mobile nav

'use strict';

( function() {

  window.onload = function() {

    var navToggle = document.getElementById( 'js-navigation-toggle' );
    var navContainer = document.getElementById( 'js-navigation' );
    var navLinks = document.querySelectorAll( '#js-navigation a.mat-button' );
    var desktopBreakpoint = 500;

    // bail if no toggle
    if ( ! navToggle ) {
      return;
    }

    var openMenu = function() {
      navToggle.classList.add( 'opened' );
      navContainer.classList.add( 'opened' );

      navToggle.setAttribute( 'aria-expanded', 'true' );
      navContainer.setAttribute( 'aria-hidden', 'false' );
    };

    var closeMenu = function() {
      navToggle.classList.remove( 'opened' );
      navContainer.classList.remove( 'opened' );

      navToggle.setAttribute( 'aria-expanded', 'false' );
      navContainer.setAttribute( 'aria-hidden', 'true' );
    };

    // close menu if you hit ESC
    var maybeOpenCloseMenu = function( e ) {

      var containsOpened = navContainer.classList.contains( 'opened' );
      var isKeyUp = ( e.type === 'keyup' );
      var isMouseUp = ( e.type === 'mouseup' );

      // if menu is opened
      if ( containsOpened ) {

        if ( isKeyUp ) {

          // if ESC
          if ( e.keyCode === 27 ) {
            closeMenu();
          }
        }

        // if target is selected
        if ( e.target === navToggle || e.target.parentNode === navToggle ) {

          if ( isMouseUp || isKeyUp && e.keyCode === 13 ) {
            closeMenu();
          }

        }

        // otherwise if not opened, and the target is the nav toggle
      } else if ( ! containsOpened && ( e.target === navToggle || e.target.parentNode === navToggle ) ) {

        if ( isMouseUp || ( isKeyUp && e.keyCode === 13 ) ) {
          openMenu();
        }

      }
    };

    // event listeners
    document.addEventListener( 'mouseup', maybeOpenCloseMenu );
    document.addEventListener( 'keyup', maybeOpenCloseMenu );

    // close menu when clicked on a link
    for ( var i = 0; i < navLinks.length; i++ ) {
      navLinks[ i ].addEventListener( 'click', closeMenu );
    }

    // remove opened classes if window expands beyond mobile width
    window.addEventListener( 'resize', function() {
      if ( window.innerWidth >= desktopBreakpoint ) {
        closeMenu();
        navContainer.removeAttribute( 'aria-hidden' );
      }
    }, true );
  }

} )();