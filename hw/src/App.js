import logo from './logo.svg';
import './App.css';
import Tweets from './Tweets';

function App() {

  var users = [
    { 
      id: 1,
      userName: 'Max',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU',
      tweets: ['Live is just a journey!', 'wow, what an amayzing day!', 'Hello']
    },
    { 
      id: 2,
      userName: 'Majed',
      img: 'https://byuc.files.wordpress.com/2012/07/avat-2.jpg',
      tweets: ['fff', 'ffff', 'ffff']
    },
    { 
      id: 3,
      userName: 'Joudy',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F6rnTtTBqVQ6ICkU5XGGSLiJkc9slVtilQp2p9XoP9X6Ye6omUWjucbi_JH1EmoaS1M&usqp=CAU',
      tweets: ['fff', 'ffff', 'ffff']
    }
  ]
  return (
    <div className="App">
        {users.map((user)=> (
          <Tweets props={user} key={user.id} />
        ))}
    </div>
  );
}

export default App;
