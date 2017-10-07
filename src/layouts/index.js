import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const StyledTemplateWrapper = styled.div`
  .container {
    max-width: 930px;
    padding-left: 35px;
    padding-right: 35px;
  }
`;

const TemplateWrapper = ({ children }) => (
  <StyledTemplateWrapper>
    <Helmet
      title="Antonio Rodriguez"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}

  </StyledTemplateWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
