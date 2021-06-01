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
  padding: 20px;
  text-align: center;
`;
