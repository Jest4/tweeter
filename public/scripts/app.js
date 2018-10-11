/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$( document ).ready(function() {

  $(function() {
    var $button = $('#tweetForm');
    $button.submit(function (event) {
      event.preventDefault();
      if ($('#tweetBox').val() == "") {
        alert("You may not tweet an empty tweet!");
      }else if ($('#tweetBox').val().length < 141) {
      var $serialized = $( tweetForm).serialize();
      $.post("/tweets", $serialized)
      .then(function() {loadTweets()});
      } else {
        alert("You have exceeded the character limit for tweets!");
      }
    });
  });

function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


function createTweetElement (tweetInfo) {
  let tweetStamp = (new Date().getTime()) - (new Date(tweetInfo.created_at))
 var tweet = `<article class="tweet">
    <header>
      <img src= ${tweetInfo.user.avatars.small} >
      <span><h2>${tweetInfo.user.name}</h2> <h4>${tweetInfo.user.handle}</h4><span>
    </header>
    <section class="tweetbody">
    ${escape(tweetInfo.content.text)}

  </section>
    <footer>
      ${tweetStamp.toString()}ms ago(FIX!)
    </footer>
  </article>`;
  return tweet
//DATESTAMP NEEDS TO BE FORMATTED (maybe use npm moment.js or time-ago ??)
}

function renderTweets(data) {
  data.sort(function(a,b) {
    return b.created_at - a.created_at;
  });
  data.forEach(tweet => $('#tweets-container').append(createTweetElement(tweet)))
}

function loadTweets() {
  $.getJSON("/tweets/", function (data) {
  ($('#tweets-container').empty())
    renderTweets(data)})
}

loadTweets()
});