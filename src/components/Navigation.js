import React from 'react';
import Menu from 'react-burger-menu/lib/menus/slide';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledMenu = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 20px;
    right: 2.5rem;
    top: 2.5rem;
  }
  .bm-burger-bars {
    background: black;
    border-radius: 10%;
  }
  .bm-cross-button {
    height: 20px;
    width: 30px;
  }
  .bm-cross {
    background: white;
  }
  .bm-menu {
    background: #2A2070;
    padding: 2.5rem 1.5rem 0;
  }
  .bm-morph-shape {
    fill: black;
  }
  .bm-item-list {
    color: white;
    padding: 1.5rem;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;


class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  render() {
    return (
      <StyledMenu>
        <Menu right isOpen={this.state.open}>
          <Link to="/">Home</Link>
          <Link to="/writings">Writings</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Menu>
      </StyledMenu>
    )
  }
}

export default Navigation;
