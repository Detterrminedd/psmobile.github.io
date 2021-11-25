$(window).scroll(function(){
  $(".opacity1").css("opacity", 1 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity4").css("opacity", 4 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity7").css("opacity", 7 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity11").css("opacity", 9.7 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity13").css("opacity", 14.3 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity17").css("opacity", 17.5 - $(window).scrollTop() / 250);
});
// title
let title = document.querySelector(".title");

window.addEventListener("scroll", () => {
  var top = window.pageYOffset / 30;
  title.style.transform = "rotate3d(0,1,0, " + top + "deg)";
});