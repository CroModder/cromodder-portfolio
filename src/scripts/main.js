
import ScrollReveal from 'scrollreveal'

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top - 100
      }, 1000);
  }
});

// Export your custom function for declarative use
export { navbarFixedTopAnimation, scrollRevelation, navActivePage}

// Code your custom function
function navbarFixedTopAnimation () {
  var scroll_pos = 0
  $('.navbar-default').removeClass('active').addClass('navbar-fixed-top')

  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop()
    if (scroll_pos > 440) {
      $('.navbar-default').addClass('active')
    } else {
      if ($('.navbar-default').hasClass('home') && $('.navbar-collapse').hasClass('in')) return
      $('.navbar-default').removeClass('active')
    }
  })

  $('.navbar-toggle').click(function (event) {
    if (!$('.navbar-default').hasClass('active')) {
      $('.navbar-default').addClass('active home')
    } else if ($('.navbar-default').hasClass('home') && scroll_pos < 440) {
      $('.navbar-default').removeClass('active')
    }
  })

  $(window).resize(function () {
    var viewportWidth = window.innerWidth
    if ($('.navbar-default').hasClass('home') && $('.navbar-collapse').hasClass('in')) {
      if (viewportWidth > 767) {
        $('.navbar-default').removeClass('active')
      } else {
        $('.navbar-default').addClass('active')
      }
    }
  })
}

// Code your custom function
function scrollRevelation (classString) {
  window.sr = new ScrollReveal()
  sr.reveal(classString, 200)
}

function navActivePage () {
  $('nav li a[href=".' + location.pathname + '"]').addClass('active')
  if (location.pathname == '/') $('nav li a[href="./index.html"]').addClass('active')
}
