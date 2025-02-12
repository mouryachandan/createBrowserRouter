import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header style={{ padding: "10px", background: "#222", color: "#fff", textAlign: "center" }}>
      <NavLink to="/" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Home</NavLink>
      <NavLink to="/about" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>About</NavLink>
      <NavLink to="/contect" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>contect</NavLink>
      <NavLink to="/help" style={{ margin: "10px", color: "#fff", textDecoration: "none" }}>Help</NavLink>
    </header>
  );
};

export default Header;
