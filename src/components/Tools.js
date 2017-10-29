import React from "react";
import styled from "styled-components";
import { TechSkills } from "../data/techskills";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

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
      >
        All
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "current-stack" ? "is-active" : ""}
      >
        Current Stack
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "learning" ? "is-active" : ""}
      >
        Learning
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "hobbyist" ? "is-active" : ""}
      >
        Hobbyist
      </button>
      <button
        onClick={props.setStatus}
        className={props.currentFilter === "legacy" ? "is-active" : ""}
      >
        Legacy
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
      filter: "current-stack"
    };
    this.setStatus = this.setStatus.bind(this);
  }
  setStatus(e) {
    const newStatus = slugify(e.target.textContent);
    this.setState({
      filter: newStatus
    });
  }
  render() {
    const skillItems = TechSkills.filter(skill => {
      switch (this.state.filter) {
        case "all":
          return true;
          break;
        case "current-stack":
          return skill.actual === true && skill.prod === true;
          break;
        case "learning":
          return skill.learning === true;
          break;
        case "production":
          return skill.prod === true;
          break;
        case "hobbyist":
          return skill.actual === true && skill.hobby === true;
          break;
        case "legacy":
          return skill.actual === false;
          break;
        default:
          return true;
          break;
      }
    })
      .sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
      .map(skill => <SkillItem {...skill} />);
    return (
      <StyledTechbox className="container">
        <h1>The Tools</h1>
        <p>Ordered alphabetically</p>
        <Controls
          setStatus={this.setStatus}
          currentFilter={this.state.filter}
        />
        <StyledSkillItems>{skillItems}</StyledSkillItems>
      </StyledTechbox>
    );
  }
}
export default Tools;
