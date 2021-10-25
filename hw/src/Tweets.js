import React from 'react'

export default function Tweets(props) {
    var tweets = props.props.tweets

    return (
        <div className='tweets-div'>
            <h3>User name:{props.props.userName}</h3>
            <img className="tweets-img" src={props.props.img} />
            <h3>Tweets:</h3>
               {tweets.map((tweet) => <li> {tweet}</li>)}
        </div>
    )
}
