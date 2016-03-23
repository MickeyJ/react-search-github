import React, { Component } from 'react'
import SearchGithub from './SearchGithub';

const Main = ({history, children}) =>{
  return(
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
          <SearchGithub history={history} />
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
};

export default Main



