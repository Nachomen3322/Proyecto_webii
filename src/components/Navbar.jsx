import React from "react";
import { NavLink } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link active">
            Datos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/teachers" className="nav-link active">
            teachers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/courses" className="nav-link active">
            courses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" className="nav-link active">
            events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sign-in" className="nav-link active">
            Sign in
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/testimonios" className="nav-link active">
            Testimonios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link active">
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active">
            contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/faq" className="nav-link active">
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
