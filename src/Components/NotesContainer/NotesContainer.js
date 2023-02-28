import React, { useState } from "react";
import Notes from "../Notes/Notes";
import "./NotesContainer.css";

function NotesContainer(props) {
  let { note } = props;

  const reverseArrayConvert = (array) => {
    const reverseArr = [];

    for (let i = array.length - 1; i >= 0; --i) {
      reverseArr.push(array[i]);
    }
    return reverseArr;
  };

  const notes = reverseArrayConvert(note);

  return (
    <>
      <div className="note-container ">
        <h1 style={{ marginBottom: "20px" }}>Notes2</h1>
        <div className="note-container_notes custom-scroll">
          {notes.length > 0 ? (
            notes.map((value, index) => {
              return (
                <Notes
                  addNote={props.addNote}
                  noteDelete={props.noteDelete}
                  key={value.id}
                  note={value}
                ></Notes>
              );
            })
          ) : (
            <h3>No Notes Present</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default NotesContainer;
