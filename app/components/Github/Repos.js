import React, { Component, PropTypes } from 'react'

const Repos = ({username, repos}) =>{
  return(
    <div>
      <h3>{username}'s Repos</h3>
      <ul className="list-group">
        {repos.map((repo, idx) =>
          (<li className="list-group-item" key={idx}>
            {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
            {repo.description && <p>{repo.description}</p>}
          </li>)
        )}
      </ul>
    </div>
  )
};

Repos.propTypes = {
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
};

export default Repos