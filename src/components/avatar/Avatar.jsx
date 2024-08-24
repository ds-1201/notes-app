import React from "react";
import styles from "./Avatar.module.css";
import { generateInitials } from "../../utils";

const Avatar = ({ color, title, width, height, fontSize }) => {
  return (
    <div
      style={{
        backgroundColor: color || "#0047ff",
        ...(width && { width }),
        ...(height && { height }),
        ...(fontSize && { fontSize: fontSize }),
      }}
      className={`${styles.avatar}`}
    >
      <span>{generateInitials(title)}</span>
    </div>
  );
};

export default Avatar;
