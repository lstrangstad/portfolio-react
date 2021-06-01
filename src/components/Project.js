import { projects } from "../Utils/json.js";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Project = () => {
  return (
    <Container>
      {projects.map((project) => (
        <Card>
          <Fade top cascade>
            <img src={project.img} alt={project.title} />
          </Fade>
          <Fade left>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Fade>
          <Fade bottom>
            <div className="project__btn">
              <a href="">Site</a>
              <a href="">Source Code</a>
            </div>
          </Fade>
        </Card>
      ))}
    </Container>
  );
};

export default Project;

const Card = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;

  img {
    padding-bottom: 5px;
  }

  h3 {
    padding-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #2b2b2b;
    flex: 1;
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
    height: 45px;

    &:hover {
      background-color: #ff785a;
      border: 1px solid #ff785a;
    }
  }

  @media (min-width: 820px) {
  }
`;

const Container = styled.div`
  @media (min-width: 820px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    padding: 40px 0;
  }
`;
