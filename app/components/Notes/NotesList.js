import React, { Component } from 'react'

const NotesList = ({notes}) =>{
  return(
    <ul className="list-group">
      {notes.map((note, idx) => (
        <li
          className="list-group-item"
          key={idx}>
          {note}
        </li>)
      )}
    </ul>
  )
};

export default NotesList