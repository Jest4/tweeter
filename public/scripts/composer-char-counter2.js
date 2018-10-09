$(document).ready(function() {
  // --- our code goes here ---
  $('#tweetBox').keyup( function() {
    if ($(this).val().length > 140) {
      if (!$(this).hasClass('negative')) {
        $(this).siblings('.counter').addClass('negative')}
      } else {
        if (!$(this).hasClass('negative')) {
        $(this).siblings('.counter').removeClass('negative')}
      }
    $(this).siblings('.counter').text(Number(140 - $(this).val().length))

  })
});
