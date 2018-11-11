import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border-radius: 3px;
  text-align: center;
  width: 100%;
  border: 1px solid #000000;
  padding: 0 0.5rem;
  line-height: 2;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  color: currentColor;
  text-decoration: none;
  display: block;
  margin: 0.25rem 0;
  font-size: 1em;
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Link = ({ children, disabled, ...props }) => (
  <StyledButton as={RouterLink} {...props}>
    {children}
  </StyledButton>
);

export const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

const alignmentMixin = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
`;

const Nav = styled.nav`
  ${alignmentMixin};
  text-align: center;
  text-shadow: 0 0 5px #ffffff;
`;

const Ul = styled.ul`
  ${alignmentMixin};
  padding: 0;
  list-style: none;
  margin: 0;
  justify-content: center;
`;

const Menu = ({ title, children }) => (
  <Nav>
    {title}
    <Ul>
      {children.map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </Ul>
  </Nav>
);

export default Menu;
