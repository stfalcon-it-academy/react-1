import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import './Menu.css';

export const Link = ({ children, disabled, ...props }) => (
  <RouterLink className={`link ${disabled && 'disabled'}`} {...props}>
    {children}
  </RouterLink>
);

export const Button = ({ children, ...props }) => (
  <button className="link" {...props}>
    {children}
  </button>
);

export default ({ title, children }) => (
  <nav className="menu">
    {title}
    <ul>
      {children.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  </nav>
);
