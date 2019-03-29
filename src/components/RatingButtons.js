import React from "react";
import "../css/ratingButtons.css";

const RatingButtons = ({onProClick, onConClick, onSkipClick}) => {
  return (
    <div className={"RatingButtons"}>
      <button className="RatingButtons__button" onClick={onProClick}>Pro</button>
      <button className="RatingButtons__button" onClick={onSkipClick}>Skip</button>
      <button className="RatingButtons__button" onClick={onConClick}>Con</button>
    </div>
  );
};

export { RatingButtons };
