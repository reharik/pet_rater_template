import React from 'react';
import '../css/pets.css';
import {PetRater} from "./PetRater";
import imageUrls from './../imageUrls.json';

const Pets = () => {
  return (<div className={"Pets"}><PetRater imageUrls={imageUrls} /></div>)
};
export { Pets };

