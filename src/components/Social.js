import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import FaInstagram from "react-icons/lib/fa/instagram";
import FaLinkedin from "react-icons/lib/fa/linkedin-square";
import FaGithub from "react-icons/lib/fa/github-alt";
import FaTwitter from "react-icons/lib/fa/twitter-square";
import FaFacebook from "react-icons/lib/fa/facebook-official";
import FaLastfm from "react-icons/lib/fa/lastfm-square";
import FaMail from "react-icons/lib/go/mail-read";
import FaCodePen from "react-icons/lib/fa/codepen";
import FaSpotify from "react-icons/lib/fa/spotify";

const SocialGrid = styled.section`
  width: 100%;
  .social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 0.5rem;
    align-items: center;
    a {
      color: #b1b1b1;
      display: block;
      font-size: 1rem;
      line-height: 1.2rem;
      padding: 0.5rem;
      span {
        margin-left: 0.2rem;
      }
      &:hover {
        color: white;
      }
    }
  }
`;

export default () => (
  <SocialGrid>
    <div className="social-links">
      <a
        href="https://twitter.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
        <span>Twitter</span>
      </a>

      <a
        href="http://instagram.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
        <span>Instagram</span>
      </a>

      <a
        href="https://www.linkedin.com/in/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://github.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span>GitHub</span>
      </a>

      <a
        href="https://codepen.io/antoniwan/#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodePen />
        <span>CodePen</span>
      </a>

      <a
        href="https://www.facebook.com/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
        <span>Facebook</span>
      </a>

      <a
        href="http://www.last.fm/user/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLastfm />
        <span>LastFM</span>
      </a>

      <a
        href="https://open.spotify.com/user/antoniwan"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify />
        <span>Spotify</span>
      </a>

      <a href="mailto:hello@antoniorodriguez.us">
        <FaMail />
        <span>Email</span>
      </a>
    </div>
  </SocialGrid>
);
