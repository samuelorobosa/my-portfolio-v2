let year = new Date().getFullYear();

let htmlyear = document.querySelector("#year");

htmlyear.textContent = year;

var $animation_elements = $('.animation-test');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('rotate');
    } else {
      $element.removeClass('rotate');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');



let x = document.querySelector(".others")
let revealButton =document.querySelector(".reveal");
let originalText="Show More"
let modified = "Show Less"

revealButton.addEventListener("click", ()=>{
  x.classList.toggle("others");
  if (revealButton.innerText===originalText){
    revealButton.innerHTML=modified
  }
  else if(revealButton.innerText===modified){
    revealButton.innerHTML=originalText
  }
})