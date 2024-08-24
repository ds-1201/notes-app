import React from "react";
import styles from "./Sidebar.module.css";
import { notes } from "../../data";
import { generateInitials, limitCharLength } from "../../utils";
const Sidebar = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.titleBox}`}>
        <h1 className={`${styles.title}`}>Pocket Notes</h1>
      </div>

      <div className={`${styles.notesListBox}`}>
        {notes.map((note) => (
          <div className={`${styles.note}`} key={note.id}>
            <div
              style={{ backgroundColor: note.color }}
              className={`${styles.avatar}`}
            >
              <span>{generateInitials(note.title)}</span>
            </div>
            <p className={`${styles.noteTitle}`}>
              {limitCharLength(note.title)}
            </p>
          </div>
        ))}
      </div>

      <button className={`${styles.createBtn}`}>
        <svg
          width="30"
          height="37"
          viewBox="0 0 35 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.3672 14.7246V22.1416H0.255859V14.7246H34.3672ZM21.3105 0.779297V37.0098H13.3467V0.779297H21.3105Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
