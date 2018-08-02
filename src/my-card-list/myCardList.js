import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const MyCardList = (props) => {
  return (
    <div>
      <ul className="nav justify-content-end">
      <li className="nav-item p-2">
        <Link to="/" className="nav-link active">
          Home
        </Link>
      </li>
    </ul>
    <h1>This is my pokemon list!</h1>
    </div>
  )
}

export default MyCardList;