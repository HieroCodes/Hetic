"use client";

import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTachometerAlt,
  faAddressBook,
  faClone,
  faChartGantt,
} from "@fortawesome/free-solid-svg-icons";
import { faChartDiagram } from "@fortawesome/free-solid-svg-icons/faChartDiagram";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";

type NavbarProps = {
  style?: React.CSSProperties;
};

export default function Navbar({ style }: NavbarProps) {
  const [active, setActive] = useState("Dashboard");
  const [horiStyle, setHoriStyle] = useState({});

  const handleActive = (item: string, element: HTMLElement) => {
    setActive(item);
    const rect = element.getBoundingClientRect();
    setHoriStyle({
      left: `${element.offsetLeft}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
    });
  };
  
  useEffect(() => {
    const activeItem = document.querySelector(".nav-item.active");
    if (activeItem) {
      const rect = (activeItem as HTMLElement).getBoundingClientRect();
      setHoriStyle({
        left: `${(activeItem as HTMLElement).offsetLeft}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });
    }
  }, []);
  

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg" style={style}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
      <a className="navbar-brand navbar-logo" href="#">
        NYC | DATA
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation" >
        <FontAwesomeIcon icon={faBars} className="text-white" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto d-flex align-items-center">
      <div className="hori-selector" style={horiStyle}>
              <div className="left"></div>
              <div className="right"></div>
            </div>
            <li
              className={`nav-item ${active === "Dashboard" ? "active" : ""}`}
              onClick={(e) => handleActive("Dashboard", e.currentTarget)}
            >
              <a className="nav-link" href="/frontend/menu/dashboard">
                <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
              </a>
            </li>
           
            <li
              className={`nav-item ${active === "Statistics" ? "active" : ""}`}
              onClick={(e) => handleActive("Statistics", e.currentTarget)}
            >
              <a className="nav-link" href="/frontend/menu/statistics">
                <FontAwesomeIcon icon={faChartGantt} /> Statistics
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
