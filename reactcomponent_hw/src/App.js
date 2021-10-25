import './App.css';
import Tweets from './Tweets';

function App() {
  const twitter=[
  {
    userName:"Maxi", 
    imgsrc:"https://img2.pngio.com/female-cartoon-head-transparent-png-svg-vector-file-cartoon-woman-face-png-512_512.png",
    tweets:["Be a game-charger. The world is already full of players"]
  },
  {
        userName:"ماجد", 
        imgsrc:"https://i.dlpng.com/static/png/6640537_preview.png",
        tweets:["I have not failedI've just found 10,000 ways that won't work.- Thomas A.Edison"]
  },
  {

        userName:"Jody", 
        imgsrc:"https://eyepeopleoptometry.com/wp-content/uploads/2018/08/girl-2.png",
        tweets:["If you look at what you have in life , you'll always have more. If you look at what you don't have in life , you'll never have enough. - Oprah Winfrey.","You will face many defeats in life , but never let yourself be defeated. -Maya Angelou"]
  }
  ];
  return (
    <div className="App">
      {twitter.map(twitter=>( <Tweets {...twitter} /> )
    )}
    </div>
  );
}

export default App;
