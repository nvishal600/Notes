import React, { useEffect, useState } from "react";
import NotesContainer from "./Components/NotesContainer/NotesContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./styles.css";

export default function App() {
  const [note, setNote] = useState(
    JSON.parse(localStorage.getItem("note"))
      ? JSON.parse(localStorage.getItem("note"))
      : []
  );

  const createNote = (color) => {
    let copyNotes = [...note];

    copyNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      color: color,
      time:
        new Date().toLocaleDateString("en-GB") +
        " " +
        new Date().toLocaleTimeString()
    });

    setNote(copyNotes);
  };

  const noteDelete = (id) => {
    setNote(
      note.filter((value) => {
        return id !== value.id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  const addNote = (id, e) => {
    let copyNotes = [...note];

    copyNotes.forEach((val) => {
      if (id === val.id) {
        val.text = e.target.value;
      }
    });

    setNote(copyNotes);
  };

  return (
    <div className="App">
      <Sidebar createNote={createNote}></Sidebar>
      <NotesContainer
        addNote={addNote}
        noteDelete={noteDelete}
        note={note}
      ></NotesContainer>
    </div>
  );
}
