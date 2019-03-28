import React from "react";
import "../css/rater.css";
import { PetImage } from "./PetImage";
import { RatingButtons } from "./RatingButtons";

const Rater = ({ imageUrl, onProClick, onConClick }) => {
  return (
    <div className={"rater"}>
      <PetImage imageUrl={imageUrl} />
      <RatingButtons onProClick={onProClick} onConClick={onConClick} />
    </div>
  );
};

export { Rater };
