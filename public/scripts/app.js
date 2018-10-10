/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
// var $tweet = $("<article>").addClass("tweet");
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement (tweetInfo) {
 `<article class="tweet">
    <header>
      <img src= ${tweetInfo.user.avatars.small} >
      <span><h2>${[tweetInfo].name}</h2> <h4>${[tweetInfo].handle}</h4><span>
    </header>
    <section class="tweetbody">
    ${tweetInfo.content.text}

  </section>
    <footer>
      ${tweetInfo.content.created_at}
    </footer>
  </article>`
}


var $tweet = createTweetElement(tweetData);
$('#tweets-container').append($tweet);

// Test / driver code (temporary)
console.log($tweet);
// to see what it looks like

});