
  var mybutton = document.getElementById("top_btn_actor");
//http://web.simmons.edu/~grabiner/comm244/weeknine/including-javascript.html  
//this page helped me



  //Get the button
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// <a href="#">top</a> // doesn't work in this situation, that is why it is present here  
