import React from "react";
import styles from "./NotesView.module.css";
import Avatar from "../avatar/Avatar";

const dummy = {
  id: 1,
  title: "Note 1",
  content: [
    {
      id: 1,
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      date: "9 Mar 2023",
      time: "5:50 AM",
    },
    {
      id: 2,
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      date: "9 Mar 2023",
      time: "5:50 AM",
    },
    {
      id: 3,
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      date: "9 Mar 2023",
      time: "5:50 AM",
    },
    {
      id: 4,
      note: "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.",
      date: "9 Mar 2023",
      time: "5:50 AM",
    },
  ],
  color: "#b38bfa",
};

const NotesView = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <header className={`${styles.noteHeader}`}>
          <Avatar
            color={dummy.color}
            title={dummy.title}
            width={"3.5rem"}
            height={"3.5rem"}
            fontSize={"1.5rem"}
          />
          <h1 className={`${styles.noteTitle}`}>{dummy.title}</h1>
        </header>

        <div className={`${styles.noteContent}`}>
          {dummy.content.map((note) => (
            <div className={`${styles.note}`} key={note.id}>
              <p className={`${styles.content}`}>{note.note}</p>
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
