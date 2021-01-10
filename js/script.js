
document.addEventListener("DOMContentLoaded", function() {
  
  // console.log('js loaded')
  // console.log(navbar)
  
  
  // Navbar Animation/Fade
  let scrolled = false;
  const navbar = document.getElementById('navbar');
  window.onscroll = function() {
    if(window.pageYOffset > 100) {
      navbar.classList.remove('top');
      if(!scrolled) {
        navbar.style.transform = 'translateY(-70px)';
      };
      setTimeout(function() {
        navbar.style.transform = 'translateY(0px)';
        // scrolled = true;
       }, 100);

    } else {
      navbar.classList.add('top');
      // scrolled = false;
    };
  };
  
  
  // Smooth Scrolling/Jquerry
  $('#navbar a, .btn').on('click', function (e) {
    console.log("JQ loaded")
      if (this.hash !== '') {
        e.preventDefault();
       
        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top - 100,
          },
          800
        );
      }
    });

});



