// soft fade load
window.onload = function(){
    setTimeout(function(){
      document.getElementById("loader").remove();
    },1000);
  };

// parallax header scrolling
const parallax = document.querySelector('#masthead');

window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
});