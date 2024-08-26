import React, { useEffect, useState, useRef } from "react";
import styles from "./CreateGroup.module.css";

// context api
import { useNotes } from "./../../context/notesContext/NotesContext";
import { useUI } from "./../../context/uiContext/UIContext";

const COLORS = [
  {
    color: "#b38bfa",
  },
  {
    color: "#ff79f2",
  },
  {
    color: "#43e6fc",
  },
  {
    color: "#f19576",
  },
  {
    color: "#0047ff",
  },
  {
    color: "#6691ff",
  },
];

const CreateGroup = () => {
  // states
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState({});
  const [disabled, setDisabled] = useState(true);

  // ref
  const inputRef = useRef(null);
  const formBoxRef = useRef(null);

  const { handleCreateGroup } = useNotes();
  const { dispatch: uiDispatch, isModalOpen } = useUI();

  useEffect(() => {
    if (name === "" || selectedColor.color === undefined) {
      setDisabled(true);
    } else setDisabled(false);
  }, [name, selectedColor]);

  useEffect(() => {
    if (isModalOpen) {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (formBoxRef.current && !formBoxRef.current.contains(e.target)) {
        // Close the modal here
        uiDispatch({ type: "CLOSE_MODAL" });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [formBoxRef, uiDispatch]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (!disabled && e.key === "Enter") {
        handleSubmit(e);
      }
    };
    document.addEventListener("keypress", handleEnter);
    return () => {
      document.removeEventListener("keypress", handleEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleColorSelect = (color) => {
    if (selectedColor.color) {
      if (selectedColor.color === color.color) {
        setSelectedColor({});
      } else setSelectedColor(color);
    } else setSelectedColor(color);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateGroup(name, selectedColor.color);
    setName("");
    setSelectedColor({});
    setDisabled(true);
    uiDispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <div
      style={{
        display: isModalOpen ? "flex" : "none",
      }}
      className={`${styles.modal}`}
    >
      <div className={`${styles.formBox}`} ref={formBoxRef}>
        <h1 className={`${styles.title}`}>Create New group</h1>
        <form onSubmit={handleSubmit}>
          <div className={`${styles.formControl}`}>
            <label htmlFor="name">Group Name</label>
            <input
              className={`${styles.input}`}
              id="name"
              type="text"
              placeholder="Enter group name"
              ref={inputRef}
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className={`${styles.formControl}`}>
            <label htmlFor="">Choose colour</label>
            <div className={`${styles.colorSelector}`}>
              {COLORS?.map((color) => (
                <div
                  key={color.color}
                  onClick={() => handleColorSelect(color)}
                  style={{ backgroundColor: color.color }}
                  className={`${styles.color} ${
                    selectedColor.color &&
                    selectedColor.color === color.color &&
                    styles.selected
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className={`${styles.createBtn}`}
            disabled={disabled}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
