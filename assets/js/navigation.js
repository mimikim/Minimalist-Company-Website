// mobile nav

'use strict';

( function() {

  window.onload = () => {

    const navToggle = document.getElementById( 'js-navigation-toggle' );
    const navContainer = document.getElementById( 'js-navigation' );
    const navLinks = document.querySelectorAll( '#js-navigation a.mat-button' );
    const desktopBreakpoint = 500;

    // bail if no toggle
    if ( ! navToggle ) {
      return;
    }

    const openMenu = () => {
      navToggle.classList.add( 'opened' );
      navContainer.classList.add( 'opened' );

      navToggle.setAttribute( 'aria-expanded', 'true' );
      navContainer.setAttribute( 'aria-hidden', 'false' );
    };

    const closeMenu = () => {
      navToggle.classList.remove( 'opened' );
      navContainer.classList.remove( 'opened' );

      navToggle.setAttribute( 'aria-expanded', 'false' );
      navContainer.setAttribute( 'aria-hidden', 'true' );
    };

    // close menu if you hit ESC
    const maybeOpenCloseMenu = ( e ) => {

      const containsOpened = navContainer.classList.contains( 'opened' );
      let isKeyUp = ( e.type === 'keyup' );
      let isMouseUp = ( e.type === 'mouseup' );

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
    navLinks.forEach( link => {
      link.addEventListener( 'click', closeMenu );
    } );

    // remove opened classes if window expands beyond mobile width
    window.addEventListener( 'resize', () => {
      if ( window.innerWidth >= desktopBreakpoint ) {
        closeMenu();
        navContainer.removeAttribute( 'aria-hidden' );
      }
    }, true );
  }

} )();