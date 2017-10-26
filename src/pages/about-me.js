import React from "react";
import styled from "styled-components";

import PictureFrame from "../components/PictureFrame";

const StyledAbout = styled.div``;
const todayYear = new Date().getFullYear();
const ginosBdayYear = 2005;

export default () => (
  <StyledAbout className="container">
    <h1>About me</h1>
    <p>
      I own experience as a front-end developer, as a back-end developer,
      leading and mentoring engineering teams, remotely and physically, as a
      project manager, as an external consultant, as a digital marketing
      "creative" technologist and in various other roles encompassed around
      technology.
    </p>

    <h2>I f@#&*ing love learning and building things!</h2>
    <p>
      Depending on the task or project, sometimes you just have to roll up the
      sleeves and execute outside the comfort zones. Ultimately, persevering
      through challenges is something that I look forward to every other day. I
      might not be the best but I will definitely attempt what's needed until
      achieving a viable resolution.
    </p>
    <p>
      My academic background is in computer science, which permits me to jump
      around languages, frameworks, design patterns, and the such, with what I
      think is relative ease. At the end of the day, I just don't want to marry
      myself with any technology or framework. I'm already married to my wife!
      One must choose the correct tool for each situation.
    </p>
    <p>
      I'm eternally grateful to my parents and college professors for instilling
      what has become a passion for learning. In our field of work, continuous
      education must be a serious commitment if one seeks to be a valuable team
      player and contributor. I also strongly believe that our learning focus
      should not be limited to tech. We should study a little something about
      everything to become well-rounded human beings. One can be a genius at
      functional programming but without some fundamentals on, for example,
      empathy and communication, one could miss out on many good things.
    </p>

    <h2>Violence is a no-go</h2>
    <p>
      Can we truly work solely with someone's skills but not with their being
      and emotions? Sometimes we can, and that's cool. But sometimes people want
      to go to work and develop professional relationships based on trust and
      kindnesses. This is why I attempt to have an empathy-based approach to
      communication and the overall management of things throughout my teams.
    </p>
    <p>
      Just check out the news and see how the strictly "performance-based" or
      "elitist" approaches in management and leading are working out... I don't
      want to discredit these styles, but my opinion is that we have to achieve
      a balance. As human beings, we have to seek to avoid violence and
      judgment. We have to seek for our coworkers to work with desire,
      commitment, and being proud of the products that we build. There's nothing
      powerful that an engineer that is inspired, empowered, (and well paid).
    </p>
    <p>
      I also try to encourage my teams day in and day out to try the next and
      the previous thing. Make a proof-of-concept. Let's philosophize a little
      bit on this approach versus that one. CSS-in-JS is dumb? Why? Let's try it
      out. Oh, you love it now; that's great. Still dislike it? That's ok too.
      Share the learnings with the rest of the teams. Write some docs about it.{" "}
      <strong>Let's do it</strong>!
    </p>

    <h2>#AdLife</h2>

    <p>
      Working out of a marketing agency is fun! Without going into the innate
      craziness of the culture and the office's spaces... We get to pick our
      stacks with virtually no restrictions (in most cases) and get to build
      whatever crazy shit we can think of! My teams ship out hundreds of
      projects each year, each with variable scopes of work, difficulty, and
      duration. And while our top deliverables are websites, promotional
      web-apps, chatbots and a ton of custom tools, we build an insane range of
      things.
    </p>

    <p>
      My favorite project at the moment is our MINE data platform. It's a huge
      analytics, insights and reporting engine that consolidates data from
      hundreds of concurrent media campaigns using Talend, BigQuery, custom
      management tools written in Python, and Tableau for visualization, from
      over 36 data sources of media, social, traffic, placement, revenue and
      other third-party sources for each client. I consider this the heart of
      our agency.
    </p>

    <h2>Something extra</h2>

    <ul>
      <li>
        I'm happily married and currently living in Miami, Florida with my wife
        and our {todayYear - ginosBdayYear}-year old son.
      </li>
      <li>English is my second language.</li>
      <li>I may or may not be a horrible writer.</li>
      <li>
        A regret I have, one which I hope to remedy soon, is my lack of work on
        open source projects.
      </li>
      <li>
        Two of my recent business ventures have been acquired but the
        experiences have been more educational than lucrative.
      </li>
      <li>
        This year I've been focusing my efforts on conversational interfaces,
        artificial intelligence, React, the Go language and improving my team
        and project management skills.
      </li>
      <li>
        Before college I was an avid athlete, practicing Shotokan and gymnastics
        competitively! Nowadays I partake in pick-up basketball and DOTA2.
      </li>
      <li>I can play a mean guitar.</li>
      <li>
        While working as a network specialist at the University of Puerto Rico's
        main precinct, a friend and I challenged the Dean of Technology to let
        us rebuild the aging website... he accepted and I quickly became the
        Lead Web Developer for the whole precinct! I built a suite of web-based
        student services: enrollment, tuition payments, online grades,
        schedules, academic progress evaluations, and other services. These web
        services are still in use to this date, hopefully with updated source
        code 😅!
      </li>
      <li>
        During "the big 2010 student strike" at the University of Puerto Rico I
        built the first secure electronic referendum system employed by any
        governmental or educational institution in Puerto Rico. It was called
        the "Sistema de Consulta al Estudiante". It was a glorious disaster.
      </li>
      <li>My wife and I met on Twitter.</li>
    </ul>

    <PictureFrame />
  </StyledAbout>
);
