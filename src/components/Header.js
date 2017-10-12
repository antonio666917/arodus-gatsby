import React from 'react';
import Headroom from 'react-headroom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .burger {

  }
`;

export default () => (
  <Headroom>
    <StyledHeader className="container">
      <div className="burger">
        X
      </div>
    </StyledHeader>
  </Headroom>
);
