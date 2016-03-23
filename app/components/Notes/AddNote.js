import React, { Component, PropTypes } from 'react'

export default class AddNote extends Component{
  setRef(ref){
    this.note = ref;
  }
  handleSubmit(){
    let newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  }
  render(){
    return(
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add Note"
          ref={(ref) => this.setRef(ref)}
        />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={() => this.handleSubmit()}>
            Add
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes ={
  username: PropTypes.string.isRequired,
  addNote: PropTypes.func.isRequired
};