import React from "react";
import styles from "./NotesView.module.css";

// component
import Avatar from "../avatar/Avatar";

// context
import { useNotes } from "../../context/notesContext/NotesContext";

const NotesView = () => {
  const { notes, selectedGroup } = useNotes();
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

        <div className={`${styles.noteContent}`}>
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
          <form className={`${styles.inputBox}`}>
            <textarea
              className={`${styles.input}`}
              name="note"
              id="note"
              placeholder="Enter your text here..........."
            ></textarea>

            <svg
              className={`${styles.addIcon}`}
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V18.125L14.5 14.5L0 10.875V0L34.4375 14.5L0 29Z"
                fill="#ABABAB"
              />
            </svg>
          </form>
        </div>
      </div>
    </>
  );
};

export default NotesView;
