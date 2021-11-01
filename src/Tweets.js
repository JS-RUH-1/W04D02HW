import React from 'react'

const Tweets = () => {
    const tweets = [
        {"name": "Jumanah",
         "img": "user1.png",
          "tweets": ["Be a game-changer: the world is already full of players"]
        },
        {"name": "Fahad",
         "img": "user2.png",
          "tweets": ["I have not faild. I have just found 10,000 ways that won't work. - Thomas A. Edison"]
        },
        {"name": "Ahmad",
         "img": "user3.png",
          "tweets": [
              "A journey of a thousand miles begins with a single step",
               "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou"
            ]
        }
    ]

    return (
        tweets.map((tweet) => {
            return (
                <div className="container text-center mb-4">
                    <p><b>User name:</b> {tweet.name}</p>
                    <img src={tweet.img} style={{width: "100px"}}/>
                    <ul className="text-start">
                        {tweet.tweets.map((t) => { return <li>{t}</li>})}
                    </ul>
                    <hr/>
                </div>
                
            )
        })
    )
}

export default Tweets;