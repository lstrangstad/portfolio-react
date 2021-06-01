import CardSkills from "../CardSkills";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import code from "../../icons/about-icons/code.svg";
import bulb from "../../icons/about-icons/lightbulb.svg";
import responsive from "../../icons/about-icons/responsive.svg";
import speedometer from "../../icons/about-icons/speedometer.svg";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <AboutSkills id="about">
      <h2 className="">About</h2>
      <div className="container">
        <Fade left>
          <CardSkills
            icon={speedometer}
            title={"Fast"}
            description={"Fast load and lag free interaction."}
          />
          <CardSkills
            icon={responsive}
            title={"Responsive"}
            description={"Layouts works on any device, big or small."}
          />
        </Fade>
        <Fade right>
          <CardSkills
            icon={bulb}
            title={"Simple"}
            description={"Make easy to use, intuitive UX/UI."}
          />
          <CardSkills
            icon={code}
            title={"Clean"}
            description={"Fast load and lag free interaction."}
          />
        </Fade>
      </div>
      <div className="flex-container">
        <Fade left>
          <AboutMe />
        </Fade>
        <Fade right>
          <Skills />
        </Fade>
      </div>
    </AboutSkills>
  );
};

export default About;

const AboutSkills = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 20px;

  h2 {
    font-size: 24px;
    text-transform: uppercase;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  @media (min-width: 820px) {
    padding: 40px;
    .container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 40px;
      margin-top: 40px;
    }

    .flex-container {
      display: flex;
      gap: 40px;
    }
  }

  @media (min-width: 820px) {
    h2 {
      font-size: 42px;
    }
  }
`;
