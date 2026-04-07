import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="p-4 text-center">
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Solutions
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navigation;
