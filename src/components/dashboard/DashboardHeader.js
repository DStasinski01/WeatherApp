import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import SearchForm from "../Search/SearchForm";
import { useHistory } from "react-router-dom";

const DashboardHeader = () => {
  const history = useHistory();

  const goBackHandler = () => {
    history.push("/");
  };

  return (
    <header className="dashboard__header">
      <FaArrowLeft onClick={goBackHandler} className="dashboard__header-icon" />
      <div className="dashboard__header-searchWrapper">
        <SearchForm />
      </div>
    </header>
  );
};

export default DashboardHeader;
