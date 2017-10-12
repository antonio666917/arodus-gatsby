import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const StyledTemplateWrapper = styled.div`
  .container {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    max-width: 830px;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin: 0 auto;
  }
`;

const TemplateWrapper = ({ children }) => (
  <StyledTemplateWrapper>
    <Helmet
      title="Antonio Rodriguez"
      meta={[
        { name: 'description', content: 'Web and software developer from Miami, Florida.' },
        { name: 'keywords', content: 'web developer, software developer, miami, florida, puerto rico, unlimited power, cookies' },
      ]}
    />
    <Navigation />
    {children()}
  </StyledTemplateWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
