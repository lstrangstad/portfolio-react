import CardSkills from "../CardSkills";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import code from "../../icons/about-icons/code.svg";
import bulb from "../../icons/about-icons/lightbulb.svg";
import responsive from "../../icons/about-icons/responsive.svg";
import speedometer from "../../icons/about-icons/speedometer.svg";
import styled from "styled-components";

const About = () => {
  return (
    <AboutSkills id="about">
      <h2 className="">About</h2>
      <div className="container">
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
      </div>
      <AboutMe />
      <Skills />
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
`;
