function Tweet(props) {
    return (
    <div className="tweet-div">
<h1>{props.props.name}</h1>
<img className="tweet-img" src={props.props.image}></img>
<h1>tweets:</h1>

{props.props.tweets.map(res=>(
    <li>{res}</li>
))}
    </div> 
    );
}

export default Tweet;