import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { MdDoneOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "./NavBarStyles.css";

export const NavBar = (props) => {
  return (
    <div className="sum">
      <nav className="navBar">
        <ul className="ListaDesordenada">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/List">To-Do List</Link>
            {props.allIsDone ? (
              <MdDoneOutline className="done" />
            ) : (
              <FiAlertCircle className="undone" />
            )}
          </li>
          <li>
            <Link to="/Pokedex">Pokedex</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
