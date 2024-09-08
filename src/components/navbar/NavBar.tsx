import React, { useState, useEffect, useRef } from "react";
import "./NavBar.scss";
import { useColor } from "../../ColorContext";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentColor } = useColor();
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="first">Alex Verheecke</div>
      <div className={`side-menu ${isOpen ? "open" : ""}`} ref={sideMenuRef}>
        <ul>
          <div className="close-icon" onClick={() => setIsOpen(false)}>
            <X onClick={toggleMenu} stroke={currentColor} />
          </div>
          <li onClick={() => setIsOpen(false)}>About</li>
          <li onClick={() => setIsOpen(false)}>Employment</li>
          <li onClick={() => setIsOpen(false)}>Project</li>
          <li onClick={() => setIsOpen(false)}>Skills</li>
          <li onClick={() => setIsOpen(false)}>
            <Link to="/old-website">Old Website</Link>
          </li>
        </ul>
      </div>
      <Menu className="menu-icon" onClick={toggleMenu} stroke={currentColor} />
    </div>
  );
};

export default NavBar;
