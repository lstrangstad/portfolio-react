import { skills } from "../Utils/json.js";
import styled from "styled-components";

const Skills = () => {
  return (
    <Wrapper className="skills">
      {skills.map((skill, idx) => (
        <div className="skills__card" key={idx}>
          <h4 className="skills__title">{skill.skill}</h4>
          <img className="skills__img" src={skill.img} alt={skill.skill} />
        </div>
      ))}
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  place-items: center;
  text-align: center;

  h4 {
    padding-bottom: 3px;
    font-size: 15px;
  }

  img {
    height: 50px;
  }

  @media (min-width: 820px) {
    margin-top: 40px;
  }
`;
