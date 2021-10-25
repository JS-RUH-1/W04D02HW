// import React from "react";
// import ReactDOM from "react-dom";

 
 function User ({Name,Image,tweets}){

return(


<div>
<h3> User Name :{Name}</h3>
<img src={Image} width={300} height={200} alt=''/>

<h4>Tweets:</h4>

<ul>

    {tweets.map(tw =><li>{tw}</li>)}
</ul>
<hr/>
</div>

);



 }
 export default User;