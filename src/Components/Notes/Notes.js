import React from "react";
import deleteIcon from "../../assets/delete.png";
import "./Notes.css";

function Notes(props) {
  return (
    <>
      <div className="note" style={{ background: props.note.color }}>
        <textarea
          className="note_text"
          onChange={(e) => props.addNote(props.note.id, e)}
          defaultValue={props.note.text}
        />
        <div className="notes_bottom">
          <span>{props.note.time}</span>
          <img
            onClick={() => props.noteDelete(props.note.id)}
            src={deleteIcon}
            alt="delete-icon"
          />
        </div>
      </div>
    </>
  );
}

export default Notes;
