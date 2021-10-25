import React from "react";
function Tweet({ name, img, tw }) {
  return (
    <div>
      <h4>UserName: {name}</h4>
      <img src={img} width={200} height={200} />
      <h4> Tweets</h4>
      <ul>
        <li>{tw.map((tweet) => tweet)}</li>
      </ul>

      <hr />
    </div>
  );
}

export default Tweet;
