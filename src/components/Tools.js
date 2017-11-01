import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TechSkills } from "../data/techskills";
import { slugify } from "../utils/misc";

const StyledTechbox = styled.div``;
const StyledControls = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: center;
  justify-content: flex-start;
  button {
    background: #f0f0f0;
    padding: 0.5rem 1.5rem;
    transition: all 0.6s;
    border: none;
    cursor: pointer;
    &.is-active {
      background: #fe687d;
      color: white;
    }
  }
`;
const StyledSkillItem = styled.div`
  display: block;
  flex-grow: 1;
  flex-basis: 30%;

  &:hover {
    background: black;
    color: white;
  }
  h5,
  p {
    margin: 0;
    line-height: 1rem;
  }
  h5 {
    margin-bottom: 0.2rem;
  }
  padding: 1rem;
  border: none;
  border-bottom: 1px solid #dfdfdf;
`;
const StyledSkillItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Controls = props => {
  return (
    <StyledControls {...props}>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "all" ? "is-active" : ""}
        data-filter="all"
      >
        All
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "current" ? "is-active" : ""}
        data-filter="current"
      >
        Currently using*
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "learning" ? "is-active" : ""}
        data-filter="learning"
      >
        Learning
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "hobby" ? "is-active" : ""}
        data-filter="hobby"
      >
        Hobbyist
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "old" ? "is-active" : ""}
        data-filter="old"
      >
        Legacy*
      </button>
    </StyledControls>
  );
};

const SkillItem = props => {
  return (
    <StyledSkillItem className="skill-item">
      <h5>{props.title}</h5>
      <p>
        <small>{props.desc}</small>
      </p>
    </StyledSkillItem>
  );
};

class Tools extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "current"
    };
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(e) {
    this.setState({
      filter: slugify(e.target.dataset.filter)
    });
  }
  render() {
    const skillItems = TechSkills.filter(skill => {
      switch (this.state.filter) {
        case "current":
          return skill.actual && skill.prod;
          break;
        case "learning":
          return skill.learning;
          break;
        case "production":
          return skill.prod;
          break;
        case "hobby":
          return skill.actual && skill.hobby;
          break;
        case "old":
          return !skill.actual;
          break;
        case "all":
        default:
          return true;
          break;
      }
    })
      .sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      })
      .map(skill => <SkillItem key={skill.title} {...skill} />);
    return (
      <StyledTechbox className="container">
        <h1>The Tools</h1>

        <Controls
          setStatus={this.setStatus}
          currentFilter={this.state.filter}
        />
        <p>
          <small>
            I'm listing things that greatly affect my daily workflow, ordered
            alphabetically. *In production.
          </small>
        </p>

        <StyledSkillItems>{skillItems}</StyledSkillItems>
      </StyledTechbox>
    );
  }
}
export default Tools;
