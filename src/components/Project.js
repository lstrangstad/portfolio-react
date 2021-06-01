import { projects } from "../Utils/json.js";
import styled from "styled-components";

const Project = () => {
  return (
    <>
      {projects.map((project) => (
        <Card>
          <img src={project.img} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project__btn">
            <a href="">Site</a>
            <a href="">Source Code</a>
          </div>
        </Card>
      ))}
    </>
  );
};

export default Project;

const Card = styled.div`
  padding: 20px 0;

  img {
    padding-bottom: 5px;
  }

  h3 {
    padding-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #2b2b2b;
  }

  .project__btn {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding-top: 20px;
  }

  a {
    padding: 10px 20px;
    border: 1px solid;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 250ms ease-in-out;
    place-content: center;
    width: 50%;

    &:hover {
      background-color: #ff785a;
      border: 1px solid #ff785a;
    }
  }
`;
