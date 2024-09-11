import React from "react";

function UserProfiles(props) {
    return (
    <div className="App">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
  </div>
    );
}

export default UserProfiles;