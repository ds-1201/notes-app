import React, { useEffect, useRef, useState } from "react";
import styles from "./NotesView.module.css";

// component
import Avatar from "../avatar/Avatar";

// context
import { useNotes } from "../../context/notesContext/NotesContext";

const NotesView = () => {
  // states
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(true);

  // context
  const { notes, selectedGroup, handleAddNote } = useNotes();

  // Refs
  const noteContentRef = useRef(null);
  const inputRef = useRef(null);

  // useEffect
  useEffect(() => {
    if (noteContentRef.current) {
      const lastNote =
        noteContentRef.current.children[
          noteContentRef.current.children.length - 1
        ];
      lastNote?.scrollIntoView({ behavior: "smooth" });
    }
  }, [notes]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedGroup]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", disabled);
    let text = content.trim();
    if (text !== "") {
      handleAddNote(text);
      setContent("");
      inputRef.current.focus();
    } else {
      alert("Please enter some text");
    }
  };

  const handleChange = (e) => {
    setContent(e.target.value);
    setDisabled(e.target.value === "");
  };

  return (
    <>
      <div className={`${styles.container}`}>
        <header className={`${styles.noteHeader}`}>
          <Avatar
            color={selectedGroup.color}
            title={selectedGroup.title}
            width={"3.5rem"}
            height={"3.5rem"}
            fontSize={"1.5rem"}
          />
          <h1 className={`${styles.noteTitle}`}>{selectedGroup.title}</h1>
        </header>

        <div className={`${styles.noteContent}`} ref={noteContentRef}>
          {notes?.map((note) => (
            <div className={`${styles.note}`} key={note.id}>
              <p className={`${styles.content}`}>{note.content}</p>
              <div className={`${styles.dateBox}`}>
                <span className={`${styles.dateTime}`}>
                  <span>{note.date}</span>{" "}
                  <span className={`${styles.dot}`}>&#9679;</span>{" "}
                  <span>{note.time}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.addContent}`}>
          <form className={`${styles.inputBox}`} onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              className={`${styles.input}`}
              name="content"
              id="content"
              value={content}
              onChange={handleChange}
              placeholder="Enter your text here..........."
            ></textarea>

            <svg
              onClick={handleSubmit}
              className={`${styles.addIcon} ${disabled && styles.disabled}`}
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z" />
            </svg>
          </form>
        </div>
      </div>
    </>
  );
};

export default NotesView;
