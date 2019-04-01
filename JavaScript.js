$('header').show();
$('map').show();


//moving to the targeted element smoothely in 2 s
$("#home").click(function() {
    $('html,body').animate({
      scrollTop:$("#second-footer").offset().top}, 2000);
    });

$("#coaches").click(function() {
      $('html,body').animate({
        scrollTop:$(".couches").offset().top}, 2000);
      });

$("#priser").click(function() {
      $('html,body').animate({
        scrollTop:$(".priser").offset().top}, 2000);
      });

$("#kontakt").click(function() {
      $('html,body').animate({
        scrollTop:$(".container").offset().top}, 2000);
      });


$(".readmore").click(function() {
      $('html,body').animate({
        scrollTop:$(".target").offset().top}, 2000);
      });
