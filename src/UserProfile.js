import React from "react";

function UserProfiles(props) {
    return (
    <div className="App">
       <img src={props.image} alt={`${props.name}'profilePic`} className="profilePicture" />
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <button className="dummyButton">View Profile</button>
  </div>
    );
}

export default UserProfiles;