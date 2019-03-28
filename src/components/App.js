import React from "react";
import { PetRater } from "./PetRater";
import imageUrls from "../imageUrls.json";
import "../css/app.css";

const App = () => {
  return (
    <div className="App">
      <PetRater imageUrls={imageUrls} />
    </div>
  );
};

export default App;
