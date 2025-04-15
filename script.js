$(function () {
  // Same-page navigation when clicking a menu item
  $("#collapsable-nav a").click(function(event) {
    // Collapse navbar when a link is clicked
    $("#collapsable-nav").collapse('hide');
  });
});
