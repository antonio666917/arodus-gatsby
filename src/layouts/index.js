import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Headroom from "react-headroom";
import Navigation from "../components/Navigation";

const StyledTemplateWrapper = styled.div`
  .container {
    max-width: 850px;
    margin-top: 60px;
    margin-bottom: 65px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    padding-right: 25px;
  }
  a {
    color: #7a40fa;
    text-decoration: none;
    transition: all 0.6s;
    &:hover {
      background: #7a40fa;
      color: white;
    }
  }
  hr {
    width: 100%;
  }
`;

const TemplateWrapper = ({ children }) => (
  <StyledTemplateWrapper>
    <Navigation />
    {children()}
  </StyledTemplateWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
