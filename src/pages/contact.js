import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Social from "../components/Social";

const StyledHome = styled.div``;

export default () => (
  <StyledHome className="container">
    <Helmet
      title="Contact Antonio Rodriguez"
      meta={[
        {
          name: "description",
          content:
            "If you would like to get in touch with me, send me an email!"
        }
      ]}
    />
    <h1>Contact</h1>

    <p>Thanks for visiting!</p>

    <p>
      If you would like to get in touch with me, please send me an email to{" "}
      <a
        href="mailto:antoniwan+arodus@gmail.com"
        title="Email Antonio Rodriguez"
      >
        antoniwan@gmail.com
      </a>{" "}
      or connect with me through any of my social media channels listed below.
    </p>

    <Social />
  </StyledHome>
);
