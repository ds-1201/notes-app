import React, { useEffect } from "react";
import styles from "./Sidebar.module.css";

// utils
import { limitCharLength } from "../../utils";

// components
import Avatar from "../avatar/Avatar";

// context api
import { useNotes } from "./../../context/notesContext/NotesContext";
import { useUI } from "./../../context/uiContext/UIContext";

const Sidebar = () => {
  const { groups, selectedGroup, handleSelectGroup } = useNotes();
  const { dispatch: uiDispatch } = useUI();

  useEffect(() => {
    console.log(selectedGroup);
    if (selectedGroup !== null) {
      console.log(
        "Scrolling Expected",
        new Date().toLocaleDateString(),
        selectedGroup
      );
      const groupElement = document.querySelector(
        `[data-group-id="${selectedGroup.id}"]`
      );
      if (groupElement) {
        groupElement.scrollIntoView({ top: 0, behavior: "smooth" });
      }
    }
  }, [selectedGroup]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.titleBox}`}>
        <h1
          onClick={() => handleSelectGroup(null)}
          className={`${styles.title}`}
        >
          Pocket Notes
        </h1>
      </div>

      <div className={`${styles.groupsListBox}`}>
        {groups?.map((group) => (
          <div
            className={`${styles.group} ${
              selectedGroup && selectedGroup.id === group.id && styles.selected
            }`}
            key={group.id}
            data-group-id={group.id}
            onClick={() => handleSelectGroup(group)}
          >
            <Avatar color={group.color} title={group.title} />
            <p className={`${styles.groupTitle}`}>
              {limitCharLength(group.title)}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => uiDispatch({ type: "OPEN_MODAL" })}
        className={`${styles.createBtn}`}
      >
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
