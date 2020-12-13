import React from "react";
import HelpRounded from "@material-ui/icons/HelpRounded";
import "./style.css";

const QuestionMark = () => {
  const handleClick = (e) => {
    e.preventDefault();

    console.log("pressed");
  };
  return (
    <>
      <a href="/chooselanguage">
        <HelpRounded onClick={handleClick} />
      </a>
    </>
  );
};

export default QuestionMark;
