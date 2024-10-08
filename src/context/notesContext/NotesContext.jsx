import { createContext, useContext, useState, useEffect } from "react";
import { SAMPLE_GROUPS } from "../../data";
import { generateID, getDateAndTime } from "../../utils";

const initialState = {
  groups: [],
  selectedGroup: null,
  notes: [],
};

const NotesContext = createContext(initialState);

export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
  const [groups, setGroups] = useState(
    localStorage.getItem("groups")
      ? JSON.parse(localStorage.getItem("groups"))
      : SAMPLE_GROUPS
  );
  const [selectedGroup, setSelectedGroup] = useState(
    localStorage.getItem("selectedGroup")
      ? JSON.parse(localStorage?.getItem("selectedGroup"))
      : null
  );
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    if (selectedGroup) {
      handleGetNotes(selectedGroup);
    } else {
      setNotes([]);
    }
  }, [selectedGroup]);

  const handleSelectGroup = (group) => {
    if (group === null) {
      setSelectedGroup(null);
      localStorage.removeItem("selectedGroup");
      return;
    }
    if (selectedGroup) {
      if (selectedGroup.id === group.id) {
        setSelectedGroup(null);
        localStorage.removeItem("selectedGroup");
      } else {
        setSelectedGroup(group);
        localStorage.setItem("selectedGroup", JSON.stringify(group));
      }
    } else {
      setSelectedGroup(group);
      localStorage.setItem("selectedGroup", JSON.stringify(group));
    }
  };

  const handleGetNotes = (group) => {
    const data = JSON.parse(localStorage.getItem(group.id)) || [];
    if (data) {
      setNotes(data);
    } else {
      setNotes([]);
    }
  };

  const handleCreateGroup = (title, color) => {
    const data = {
      title,
      color,
      id: generateID(),
    };
    setGroups([...groups, data]);
    handleSelectGroup(data);

    // store to local storage
    localStorage.setItem("groups", JSON.stringify([...groups, data]));
  };

  const handleAddNote = (content) => {
    const { date, time } = getDateAndTime();
    const data = {
      content,
      date,
      time,
      id: generateID(),
    };
    setNotes((prev) => {
      // store to local storage
      localStorage.setItem(selectedGroup.id, JSON.stringify([...prev, data]));
      return [...prev, data];
    });

    return data.id;
  };

  return (
    <NotesContext.Provider
      value={{
        // Groups and Notes
        groups,
        handleCreateGroup,
        handleSelectGroup,
        handleAddNote,
        selectedGroup,
        notes,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
