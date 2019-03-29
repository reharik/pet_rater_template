import React from 'react';
import '../css/leftNav.css';
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (<div className={"LeftNav"}>
    <div className="LeftNav__menu">
    <ul className="LeftNav__list">
      <li className="LeftNav__list__item">
        <Link to="/rater/" >Pet Rater</Link>
      </li>
      <li className="LeftNav__list__item">
        <Link to="/dashboard/" >DashBoard</Link>
      </li>
    </ul>
    </div>
  </div>)
};

export { LeftNav };

