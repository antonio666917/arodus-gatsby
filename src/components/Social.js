import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

import FaInstagram from "react-icons/lib/fa/instagram";
import FaLinkedin from "react-icons/lib/fa/linkedin-square";
import FaGithub from "react-icons/lib/fa/github-alt";
import FaTwitter from "react-icons/lib/fa/twitter-square";
import FaFacebook from "react-icons/lib/fa/facebook-official";
import FaLastfm from "react-icons/lib/fa/lastfm-square";
import Mail from "react-icons/lib/go/mail-read";

const SocialGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  a,
  a:active,
  a:visited {
    color: #b1b1b1;
    display: block;
    flex-basis: 30%;
    span {
      margin-left: 0.5rem;
    }
    &:hover {
      color: white;
    }
  }
`;

export default () => (
  <SocialGrid>
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
      href="https://twitter.com/antoniwan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter />
      <span>Twitter</span>
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
      href="http://instagram.com/antoniwan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
      <span>Instagram</span>
    </a>

    <a
      href="http://www.last.fm/user/antoniwan"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLastfm />
      <span>LastFM</span>
    </a>

    <a href="mailto:hello@antoniorodriguez.us">
      <Mail />
      <span>Email</span>
    </a>
  </SocialGrid>
);
