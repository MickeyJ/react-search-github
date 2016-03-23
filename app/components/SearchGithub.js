import React, { Component } from 'react'
import Router, { History } from 'react-router'

export default class SearchGithub extends Component{
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    let username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.context.router.push(`profile/${username}`, null)
  }
  render(){
    return(
      <div className="col-sm-12">
        <form onSubmit={() => this.handleSubmit()} >
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.object.isRequired
}
