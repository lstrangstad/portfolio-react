import Project from "../Project.js";
import styled from "styled-components";

const Projects = () => {
  return (
    <>
      <Wrapper id="projects">
        <h2>Projects</h2>
        <Project />
      </Wrapper>
    </>
  );
};

export default Projects;

const Wrapper = styled.div`
  background-color: #8a9ec7;
  padding: 40px;
  text-align: center;

  @media (min-width: 820px) {
    h2 {
      font-size: 42px;
    }
  }
`;
