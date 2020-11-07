import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-book">Add</NavLink>
        </li>
        <li>
          <NavLink to="/books">Books</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
