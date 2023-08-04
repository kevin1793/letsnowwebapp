import * as React from 'react';

function Middle() {
  function submitPost(e: any) {
    var postVal = document.getElementById('postText').value;
    console.log(postVal);
    var feedContNode = document.getElementById('feedCont');

    var newHTML = 'hi';

    feedContNode.innerHTML += newHTML;
  }
  return (
    <>
      <div id="tweetCont">
        <div></div>
        <textarea id="tweetText"></textarea>
        <button onClick={(e) => submitPost(e)}>Make POST</button>
      </div>
      <div id="feedCont">
        <div className="postBox">
          <img src="" />
          <div className="username">Kevvey</div>
          <div className="username">Kevvey</div>
        </div>
      </div>
    </>
  );
}

export default Middle;
