import React from "react";
import "../css/scoreCard.css";

const ScoreCard = ({ pro, con, onStartOver }) => {
  return (
    <div className={"ScoreCard"}>
      <span>You Liked {pro} Pets</span>
      <button onClick={onStartOver} >Start Over</button>
      <span>You Dissed {con} Pets</span>
    </div>
  );
};

export { ScoreCard };
