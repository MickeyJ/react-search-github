import React, { Component, PropTypes } from 'react'

const UserProfile = ({bio, username}) =>{
  return(
    <div>
      <h3>{username}</h3>
      {bio.avatar_url &&
        <li className="list-group-item">
          <img src={bio.avatar_url}
               className="img-fluid img-rounded"
               style={{width: '100%'}}
               alt="#" />
        </li>}
      {bio.name && <li className="list-group-item">{bio.name}</li>}
    </div>
  )
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  bio: PropTypes.object.isRequired
};

export default UserProfile