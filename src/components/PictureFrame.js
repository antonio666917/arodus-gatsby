import React from "react";
import styled from "styled-components";

import me from "../assets/images/me.jpg";
import ginoandme from "../assets/images/ginoandme.jpg";
import meandmoni from "../assets/images/meandmoni.jpg";
import mecartoon from "../assets/images/mecartoon.jpg";
import ginoandmeandmeandgino from "../assets/images/ginoandmeandmeandgino.jpg";

const PictureFrame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    margin: 0.5rem;
    width: calc(50% - 1rem);
  }

  img {
    display: block;
    flex: 0 auto;
    width: 100%;
    margin: 0;
    border: none;
    border: 1px solid #7a40fa;
  }
`;

export default () => (
  <PictureFrame>
    <div>
      <img
        src={ginoandme}
        alt="Antonio Rodriguez - leader, web developer, dad, husband, knows what he's doing 60% of the time"
      />
    </div>
    <div>
      <img
        src={meandmoni}
        alt="Antonio Rodriguez - leader, web developer, dad, husband, knows what he's doing 60% of the time"
      />
    </div>
  </PictureFrame>
);
