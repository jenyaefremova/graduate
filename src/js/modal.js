$(document).ready(function() {

  var button = $('.modal-button');
  var modal = $('#modal');
  var close = $('#close');

  button.on('click', function() {
    modal.addClass('modal-active');
  });
  close.on('click', function() {
    modal.removeClass('modal-active');
    $('#modal-form').trigger( 'reset' );
  });

});


