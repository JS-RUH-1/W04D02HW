import React from 'react'

export default function Tweets(props) {
    var tweets = props.props.tweets

    return (
        <div className='tweets-div'>
            <h1>User name:{props.props.userName}</h1>
            <img className="tweets-img" src={props.props.img} />
            <h1>Tweets:</h1>
            <ul>
               {tweets.map((tweet) => <li>{tweet}</li>)}
            </ul>
        </div>
    )
}
