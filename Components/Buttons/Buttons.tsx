import React from "react";
import styles from "../../styles/Navbar.module.css";

interface Props {
  text: string;
  className: string;
}

const Buttons = ({ text, className }: Props) => {
  return (
    <div>
      {/* <button className={`${className}`}>{text}</button> */}
      <button className={styles[className]}>{text}</button>
    </div>
  );
};

export default Buttons;
