import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className="nav justify-content-start">
      <li className="nav-item p-2">
        <Link to="/" className="nav-link active">
          Home
        </Link>
      </li>

      <li className="nav-item p-2">
        <Link to="/mycardlist" className="nav-link active">
          My list
        </Link>
      </li>
    </ul>
  )
}

export default Header;