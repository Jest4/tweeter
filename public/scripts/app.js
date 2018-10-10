/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
// var $tweet = $("<article>").addClass("tweet");
const tweetData = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement (tweetInfo) {
  let tweetStamp = (new Date().getTime()) - (new Date(tweetInfo.created_at))
 var tweet = `<article class="tweet">
    <header>
      <img src= ${tweetInfo.user.avatars.small} >
      <span><h2>${tweetInfo.user.name}</h2> <h4>${tweetInfo.user.handle}</h4><span>
    </header>
    <section class="tweetbody">
    ${tweetInfo.content.text}

  </section>
    <footer>
      ${tweetStamp.toString()}ms ago(FIX!)
    </footer>
  </article>`;
  return tweet
}

//DATESTAMP NEEDS TO BE FORMATTED (maybe use npm time-ago ??)

function renderTweets(data) {
  data.forEach(tweet => $('#tweets-container').append(createTweetElement(tweet)))
}

renderTweets(tweetData);

// Test / driver code (temporary)
// console.log($tweet);
// to see what it looks like

});