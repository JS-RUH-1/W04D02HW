import "./App.css";
import User from "./components/User";

function App() {
  const users = [
    {
      name: "Emad",
      image: "./images/1.png",
      tweets: ["Hi i'm Emad", "It's me Emad"],
    },
    {
      name: "Abdullah",
      image: "./images/2.png",
      tweets: ["Hi i'm Abdullah", "It's me Abdullah"],
    },
    {
      name: "Ahmed",
      image: "./images/3.png",
      tweets: ["Hi i'm Ahmed", "It's me Ahmed"],
    },
    {
      name: "Khaled",
      image: "./images/4.png",
      tweets: ["Hi i'm Khaled", "It's me Khaled"],
    },
  ];

  return <div className="App">
    {users.map(user => <User {...user} />)}
  </div>;
}

export default App;
