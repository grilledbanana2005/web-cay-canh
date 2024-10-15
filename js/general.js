window.addEventListener("scroll", function() {
    var navBar = document.querySelector(".nav-bar");
    if (window.scrollY > 200) { 
      navBar.classList.add("sticky-active");
    } else {
      navBar.classList.remove("sticky-active");
    }
  });