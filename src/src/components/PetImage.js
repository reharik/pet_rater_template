import React from "react";
import "../css/petImage.css";

const PetImage = ({ imageUrl }) => {
  return (
    <div className={"PetImage"}>
      <img src={imageUrl}  height="300px" />
    </div>
  );
};

export { PetImage };
