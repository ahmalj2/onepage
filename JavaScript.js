//showing elments if the javscipt is enabled
$('header').show();
$('map').show();
$('#top').show();

//moving to the targeted element smoothely in 2 s
$("#home").click(function() {
    $('html,body').animate({
      scrollTop:$("#second-footer").offset().top}, 2000);
    });
//moving to the targeted element smoothely in 2 s
$("#coaches").click(function() {
      $('html,body').animate({
        scrollTop:$(".couches").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#priser").click(function() {
      $('html,body').animate({
        scrollTop:$(".priser").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#kontakt").click(function() {
      $('html,body').animate({
        scrollTop:$(".container").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$(".readmore").click(function() {
      $('html,body').animate({
        scrollTop:$(".target").offset().top}, 2000);
      });
      //moving to the targeted element smoothely in 2 s
$("#top").click(function() {
      $('html,body').animate({
        scrollTop:$("header").offset().top}, 2000);
      });
