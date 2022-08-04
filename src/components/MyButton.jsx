import React from "react";
import ArrowIcon from "../images/hero/arrow-icon.svg"

const MyButton = ({bgColor,children}) => {
  return (
    <button className={`button bg-${bgColor}-btn`}>
      <span>{children}</span>
      <div className="button__imgbox">
        <img src={ArrowIcon} alt="icon" />
      </div>
    </button>
  );
};

export default MyButton;
