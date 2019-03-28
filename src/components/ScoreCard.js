import React from "react";
import "../css/scoreCard.css";

const ScoreCard = ({ pro, con }) => {
  return (
    <div className={"scoreCard"}>
      <span>You Liked {pro} Pets</span>
      <span>You Dissed {con} Pets</span>
    </div>
  );
};

export { ScoreCard };
