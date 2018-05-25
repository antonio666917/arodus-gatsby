import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Social from "../components/Social";

const StyledHome = styled.div``;

export default () => (
  <StyledHome className="container">
    <Helmet
      title="Contacting Antonio Rodriguez"
      meta={[
        {
          name: "description",
          content:
            "Don't be shy! I'm open to mentoring, code reviews, projects or just casual conversation."
        }
      ]}
    />
    <h1>Contact</h1>

    <p>
      Write me at{" "}
      <a
        href="mailto:antoniwan+arodus@gmail.com?subject=Hey, Antonio!"
        title="Email Antonio Rodriguez"
      >
        antoniwan@gmail.com
      </a>{" "}
      or check out my social media links below. I'm fairly active in <a
        href="https://twitter.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >Twitter</a>. So after you follow me, check out my #beastmode <a href="https://open.spotify.com/user/antoniwan/playlist/18Fchy5u9YkOvUqtAKqMj1" target="_blank" rel="noopener noreferrer">classical</a> and <a href="https://open.spotify.com/user/antoniwan/playlist/7gqDk94DAF0O5ifBuKAlVH" target="_blank" rel="noopener noreferrer">salsa</a> playlists. Cheers!</p>

    <Social />
  </StyledHome>
);
