
$(document).ready(function () {
  $('#button-active').click(function () {
    $('#menu-active').toggleClass('navbar__links-active');
  });
  $("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 200;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixed_offset
    }, 1000);
    e.preventDefault();
  });
});