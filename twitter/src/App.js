import logo from './logo.svg';
import './App.css';
import  Tweet from './Tweet'

function App(props) {
  let tweet =[
    {
    name:"user 1",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU",
    tweets:["hello Ghadah","gggg"]
  },
  {
    name:"user 2",
    image:"https://byuc.files.wordpress.com/2012/07/avat-2.jpg",
    tweets:["hello Ghadah","gggg"]
  },
  {
    name:"user 3",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F6rnTtTBqVQ6ICkU5XGGSLiJkc9slVtilQp2p9XoP9X6Ye6omUWjucbi_JH1EmoaS1M&usqp=CAU",
    tweets:["hello Ghadah","gggg"]
  }

]
  return (
    <div className="App">

   { tweet.map(res=>(
    <Tweet props={res}/> 
   ))}
    </div>
  );
}

export default App;
