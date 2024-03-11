import React from "react";
import "./style.css"

const UserProfile =({Name,Email})=> {
  return (
    <div className="main">
        <h1>New User</h1>
        <p>Name: <i>{Name}</i></p>
        <p>Email: <i>{Email}</i></p>
    </div>
  );
}

export default UserProfile;
