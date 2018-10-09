document.getElementById("tweetBox").addEventListener("keyup", function(){
  document.getElementsByClassName("counter")[0].innerText=[140 - $("#tweetBox").val().length]
});