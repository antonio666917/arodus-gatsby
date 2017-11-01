import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import PictureFrame from "../components/PictureFrame";
import Social from "../components/Social";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

class Home extends React.Component {
  render() {
    return (
      <StyledHome className="container">
        <Helmet
          title="Antonio Rodriguez"
          meta={[
            {
              name: "description",
              content: "Web developer in Miami, Florida."
            }
          ]}
        />
        <h1>Hello!</h1>
        <p>
          I'm a <strong>web developer</strong> employed as the{" "}
          <strong>chief technologist</strong> at a digital marketing agency.
          Currently I work primarily with React and Node but over the years I
          have acquired proficiency in{" "}
          <Link to="/the-tools">many technologies</Link>.
        </p>
        <p>
          Besides building my own companies, I've also produced things for many
          brands, Fortune 500 and small companies or individuals alike. Need a
          hand with an upcoming project? Learn a bit more{" "}
          <Link to="/about-me">about me</Link> and then consider{" "}
          <a href="mailto:antoniwan@gmail.com?subject=Let's work together!">
            working with me
          </a>.
        </p>
        <p>
          Thanks for visiting!<br />
          <strong>Antonio Rodriguez</strong>
        </p>

        <hr />
        <Social />
      </StyledHome>
    );
  }
}
export default Home;
