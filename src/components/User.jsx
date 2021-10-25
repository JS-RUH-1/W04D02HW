import Tweet from "./Tweet";

function User({name, image, tweets}) {
    return <div className="user">
        <h4>User name: {name}</h4>
        <img src={image} alt={name} />
        <h5>Tweets:</h5>
        <ul>
            {tweets.map(tweet => <Tweet tweet={tweet} />)}
        </ul>
        <hr />
    </div>;
}

export default User;