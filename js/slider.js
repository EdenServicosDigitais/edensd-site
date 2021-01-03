var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);
showDivs3(slideIndex);


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivs2(n) {
  showDivs2(slideIndex += n);
}

function plusDivs3(n) {
  showDivs3(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-3");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}