import React from 'react';

import './Menu.css';

export const Link = ({ children, disabled, ...props }) => (
  <a className={`link ${disabled && 'disabled'}`} {...props}>
    {children}
  </a>
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
