import logo from "./logo.svg";
import "./App.css";
import Tweet from "./tweet";

function App() {
  const data = [
    {
      name: "Ahmed",
      img: "https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png",
      tw: ["i love u .", "maybe i don't."]
    },
    {
      name: "Ali",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU",
      tw: ["i hate u .", "maybe i don't."]
    },
    {
      name: "Asma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfuwLp9vkIvTOU_3siQKTq5zLdU5FvdH3ng&usqp=CAU",
      tw: ["i love react .", "maybe i don't."]
    },
  ];

  return (
    <div className="App">
      {data.map((d) => (
        <Tweet {...d} />
      ))}
    </div>
  );
}

export default App;
