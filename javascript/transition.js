// $(function(){  // $(document).ready shorthand
//   $('.monster').fadeout('slow');
// });

// $(document).ready(function() {
    
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
    
//         /* Check the location of each desired element */
//         $('.firsttext').each( function(i){
            
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
            
//             /* If the object is completely visible in the window, fade it it */
//             if( bottom_of_window > bottom_of_object ){
                
//                 $(this).animate({'opacity':'0'},1500);
                    
//             }
            
//         }); 
    
//     });
    
// });

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
  $(".opacity11").css("opacity", 10 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity13").css("opacity", 13 - $(window).scrollTop() / 250);
});

$(window).scroll(function(){
  $(".opacity17").css("opacity", 16 - $(window).scrollTop() / 250);
});



console.log(window, "shaber");
