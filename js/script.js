javascript$(function () {
  // When a nav link is clicked, collapse the menu
  $(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse('hide');
  });
  
  // Make sure the toggle button works
  $(".navbar-toggle").click(function() {
    $(".navbar-collapse").collapse('toggle');
  });
});
