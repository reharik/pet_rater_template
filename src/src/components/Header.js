import React from 'react';
import '../css/header.css';
import headerIcon from '../images/headerIcon.jpg'

const Header = () => {
  return (<div className={"Header"}>
    <div className={"Header__icon"} >
      <img src={headerIcon} alt="Pet Rater Portal icon" width="130px" height="130px"/>
    </div>
    <div className={'Header__title'} >
      Pet Rater Portal
    </div>
    <div></div>
  </div>)
};

export { Header };

