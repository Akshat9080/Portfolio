$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
  })
});

var typed = new Typed(".typing",{
  strings: ["Programmer","Engineer","Frontend-developer","Designer"],
  typespeed:100,
  backspeed:60,
  loop:true
});
