import React from "react";
import "../css/ratingButtons.css";

const RatingButtons = ({onProClick, onConClick}) => {
  return (
    <div className={"ratingButtons"}>
      <button onClick={onProClick}>Pro</button>
      <button onClick={onConClick}>Con</button>
    </div>
  );
};

export { RatingButtons };
