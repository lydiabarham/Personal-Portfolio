import React from 'react';
import { NavLink } from 'react-router-dom';
import './styleNavTabs.css'

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Me Now
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          My Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          My History
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact Me
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
