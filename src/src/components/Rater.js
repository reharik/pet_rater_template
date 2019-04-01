import React from "react";
import "../css/rater.css";
import { PetImage } from "./PetImage";
import { RatingButtons } from "./RatingButtons";

const Rater = ({ imageUrl, onProClick, onConClick, onSkipClick }) => {
  return (
    <div className={"Rater"}>
      <PetImage imageUrl={imageUrl} />
      <RatingButtons onProClick={onProClick} onConClick={onConClick} onSkipClick={onSkipClick} />
    </div>
  );
};

export { Rater };
