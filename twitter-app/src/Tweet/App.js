import React from "react";
import User from "./User";

function App(){

const TW=[
    {
        Name:'Maxi',
        Image:'/twitter-app/image/girl.jpg',
        tw:['Be a game-charger. The world is already full of players']
    },
    {

        Name:'ماجد',
        Image:'/twitter-app/image/boy.jpg',
        tw:["I have not failedI've just found 10,000 ways that won't work.- Thomas A.Edison"]
    },
    {
        Name:'Jody',
        Image:'/twitter-app/image/girl2.jpg',
        tw:["If you look at what you have in life , you'll always have more. If you look at what you don't have in life , you'll never have enough. - Oprah Winfrey.","You will face many defeats in life , but never let yourself be defeated. -Maya Angelou"]
    }
];

return(
    <div>

        {TW.map(TW=>(<tw{...TW}/>))}
    </div>
)

}
export default App;