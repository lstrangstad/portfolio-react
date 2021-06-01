import self from "../images/me.jpg";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container>
      <img src={self} alt="Me" />
      <h3>Who am I?</h3>
      <p>
        I’m studying Front-End Development at{" "}
        <a href="http://www.noroff.com">Noroff</a> in Bergen, Norway. I have a
        passion for clean code, animations and creating good looking layouts
        with HTML, CSS and JavaScript etc.{" "}
        <a href="#contact">Let’s make something special!</a>.
      </p>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 20px;

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    text-align: center;
    max-width: 350px;
  }

  @media (min-width: 820px) {
    margin-top: 40px;
  }
`;
