$('.ba-works__slider').slick({
	dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slide: 'div',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
      }
    }
    ]
});

$(document).ready(function(){
  $('.slider2').slick({
   "slidesToShow": 3, "slidesToScroll": 1,
   infinite: true,
   dots: false,
   autoplay: true,
   autoplaySpeed: 4000,
   slide: 'div',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1
      }
    },
  ]
  });
});

function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
          disableDefaultUI: true
        });

    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      icon: "img/marker.svg",
      animation: google.maps.Animation.DROP,
      position: {lat: -34.397, lng: 150.644}
    });
}   

initMap();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//# sourceMappingURL=../sourcemaps/main.js.map

//# sourceMappingURL=../sourcemaps/main.js.map
