import React from "react";
import { useHistory } from "react-router-dom";
import {FaTimes} from "react-icons/fa";

const PageHeader = ({ title }) => {
  let history = useHistory();

  const buttonHandler = () => {
    history.push("/");
  };

  return (
    <div className="section__header">
      <h1>{title}</h1>
      <button className="section-btn" onClick={buttonHandler}>
        <FaTimes/>
      </button>
    </div>
  );
};

export default PageHeader;
