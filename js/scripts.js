$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});