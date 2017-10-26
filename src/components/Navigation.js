import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Headroom from "react-headroom";

const StyledMenu = styled.div`
  .headroom {
    background: white;

    nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      max-width: 850px;
      margin: 0 auto;
      padding: 15px 25px;
    }

    a {
      margin-bottom: -4px;
      text-decoration: none;
      margin-left: 1rem;
      &:first-child {
        margin-left: 0;
      }

      &.active {
        text-decoration: underline wavy;
      }

      &.hidden {
        opacity: 0;
      }
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <StyledMenu>
        <Headroom>
          <nav>
            <Link to="/" exact activeClassName="hidden">
              Home
            </Link>
            <Link to="/about-me" activeClassName="active">
              About Me
            </Link>
          </nav>
        </Headroom>
      </StyledMenu>
    );
  }
}

export default Navigation;
