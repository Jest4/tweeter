/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  var $composeButton = $('#composeButton');
  var $newTweet = $('.new-tweet');
  var $tweetBox = $('#tweetBox');
  var $tweetError = $("#tweetError");
  var $tweetsContainer = $('#tweets-container');
  var $button = $('#tweetForm');

  $button.submit(function (event) {
      $tweetError.slideUp().text("");
    event.preventDefault();
    if ($tweetBox.val() === "") {
      $tweetError.slideDown().text("ERROR:You may not tweet an empty tweet!");
    }else if ($tweetBox.val().length < 141) {
    var $serialized = $tweetBox.serialize();
    $.post("/tweets", $serialized)
    .then(function() {
      loadTweets();
      $tweetBox.val("");
    }
      );
    } else {
      $tweetError.slideDown().text("ERROR: You have exceeded the character limit for tweets!");
    }
  });

  function escape(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement (tweetInfo) {
   return `<article class="tweet">
      <header>
        <img src= ${tweetInfo.user.avatars.small} >
        <span><h2>${escape(tweetInfo.user.name)}</h2> <h4>${escape(tweetInfo.user.handle)}</h4><span>
      </header>
      <section class="tweetbody">
        ${escape(tweetInfo.content.text)}
      </section>
      <footer>
        <div class="tweetTime">${$.timeago(tweetInfo.created_at)}</div>
        <div class="reactions"><ion-icon name="flag"></ion-icon><ion-icon name="repeat"></ion-icon><ion-icon name="heart"></ion-icon></div>
        </ion-icon>
      </footer>
    </article>`;
  }

  function renderTweets(data) {
    data.sort(function(a,b) {
      return b.created_at - a.created_at;
    });
    data.forEach(tweet => $tweetsContainer.append(createTweetElement(tweet)));
  }

  function loadTweets() {
    $.getJSON("/tweets/", function (data) {
      ($tweetsContainer.empty());
      renderTweets(data);
    });
  }

  $composeButton.click(function (event) {
    if ($newTweet.is(":hidden")) {
      $newTweet.slideToggle(function() {$tweetBox.focus();});
    } else {
      $newTweet.slideToggle();
    }
  });


  loadTweets();
});