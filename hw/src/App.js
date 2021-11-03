import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets';

function App() {
  const twitter=[
  {
    userName:"Max", 
    imgsrc:"https://www.kindpng.com/picc/m/72-723761_student-png-sammilani-mahavidyalaya-undergraduate-and-dummy-user.png",
    tweets:["Be a game-charger. The world is already full of players"]
  },
  {
        userName:"Majed", 
        imgsrc:"https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png",
        tweets:["I have not failedI've just found 10,000 ways that won't work.- Thomas A.Edison"]
  },
  {

        userName:"Jody", 
        imgsrc:"https://www.clipartmax.com/png/middle/162-1623921_stewardess-510x510-user-profile-icon-png.png",
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
