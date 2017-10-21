import React from "react";
import styled from "styled-components";
import ProfilePicture from "../assets/images/profilepicture.jpg";
import Link from "gatsby-link";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    text-align: center;
  }
  p {
    text-align: left;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: 0;
    margin-bottom: 2rem;
    border: none;
  }
  hr {
    width: 100%;
  }
  a,
  a:active,
  a:visited {
    color: #7a40fa;
    text-decoration: none;
  }
  a:hover {
    background: #7a40fa;
    color: white;
  }
`;

export default () => (
  <StyledHome className="container">
    <img
      src={ProfilePicture}
      alt="Antonio Rodriguez - leader, web developer, dad, husband, knows what he's doing 60% of the time"
    />

    <p>
      Hello! I'm a <strong>web developer</strong> employed as the{" "}
      <strong>chief technologist</strong> at a digital marketing agency.
      Currently I work primarily with React and Node but over the years I have
      acquired proficiency in many technologies.
    </p>
    <p>
      Besides building my own companies, I've also produced things for many
      brands, Fortune 500 and small companies or individuals alike. Need a hand
      with an upcoming project? Learn a bit more{" "}
      <Link to="/about">about me</Link> and then consider{" "}
      <a href="mailto:hello@antoniorodriguez.us">working with me</a>.
    </p>
    <p>Thanks for visiting!</p>
    <h1>Antonio Rodríguez</h1>

    <hr />
  </StyledHome>
);
