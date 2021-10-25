
function Tweets({userName, imgsrc,tweets}) {
    return (
     <div>
      <h3>User Name:  {userName}</h3>
      <img src={imgsrc} width={220} height={220} alt=""/>
      <h3>Tweets: </h3>

      <ul>
         {tweets.map(tweet => <li>{tweet}</li>) }
      </ul>
      <hr></hr>


     </div>
    ) ;
}

export default Tweets;