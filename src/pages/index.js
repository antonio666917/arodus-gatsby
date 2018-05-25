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
              content:
                "Software engineer living in Miami, Florida. Knows what he's doing 60% the time. Will work for food."
            }
          ]}
        />
        <h1>Hello!</h1>
        <p>
          My name is in your browser's address bar 🤓 and I lead software development for a <a href="https://m8agency.com" target="_blank" rel="noopener noreferrer">marketing agency</a> in Miami, Florida. I absolutely enjoy learning and working with <Link to="/the-tools">web technologies</Link>. We have the best job in the world!
        </p>
        <p>Away from the screen, I like playing <a href="https://www.instagram.com/stories/highlights/17908582195073038/" target="_blank" rel="noopener noreferrer">guitar</a>, basketball and spending time with my family.  And food, lots of food.</p>
        <p>Please do <Link to="/contact">contact</Link> me! I'm open to mentoring, code reviews, projects or just casual conversation.</p>
        <p>
          Thanks for visiting!
        </p>

      </StyledHome>
    );
  }
}
export default Home;
