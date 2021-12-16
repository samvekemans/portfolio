var hamburgerbutton = document.querySelector("#burger")
var nav = document.querySelector("nav")
var kruisbutton = document.querySelector("#kruis")
var Logo = document.getElementById("logo")

hamburgerbutton.addEventListener('click',active,disableScrolling)
kruisbutton.addEventListener('click',weg)

function active(){
    nav.classList.add('toonmenu')
    disableScrolling();
}

function weg(){
    nav.classList.remove('toonmenu')
    enableScrolling();
}

window.onscroll = function() {
    grootlogo()
  };

  function grootlogo() {
    if (document.documentElement.scrollTop > 20) {
      logo.style.width = '12em';
    } else {
      logo.style.width = '8em';
    }
  }
  
  function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);}
  }

  function enableScrolling(){
    window.onscroll=function(){};
  }




 /* https://stackoverflow.com/questions/42460930/how-to-resize-navbar-logo-on-scroll-down */
