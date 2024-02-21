import React from "react";
import './user.css'


function UserCard({ cardInfo }) {
  return (
      <div className="App">
          <h1>Users</h1>
           <div className="flex"> 
                <p>{cardInfo.first_name}</p>
                <p>{cardInfo.last_name}</p>
                <p>{cardInfo.email}</p>
                <img alt='' src={cardInfo.avatar}/>
           </div>
      </div>
  )
}

export default UserCard