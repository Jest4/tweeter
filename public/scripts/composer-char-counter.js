$(document).ready(function() {
  // --- our code goes here ---
  $('#tweetBox').keyup( function() {
    let $container = $(this).siblings('.counter');
    let $tweetLength = $(this).val().length;
    let $exceeds = $tweetLength > 140;
    let $hasclass = $container.hasClass('negative');
    if ($exceeds && !$hasclass) {
        $container.addClass('negative');
      } else if (!$exceeds && $hasclass) {
        $container.removeClass('negative');
      }
    $container.text(Number(140 - $tweetLength));
  });
});