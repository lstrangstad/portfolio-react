import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <ArrowContainer href="#home">
        <DoubleArrow />
      </ArrowContainer>
      <IconsContainer>
        <IconBox>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://facebook.com/lstrangstad"
          >
            <Facebook />
          </a>
        </IconBox>
        <IconBox>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://instagram.com/lstrangstad"
          >
            <Instagram />
          </a>
        </IconBox>
        <IconBox>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/linus-strangstad/"
          >
            <LinkedIn />
          </a>
        </IconBox>
        <IconBox>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lstrangstad"
          >
            <GitHub />
          </a>
        </IconBox>
      </IconsContainer>
      <p>
        Linus Strangstad <span>© 2021.</span> All rights reserved.
      </p>
    </Container>
  );
};

export default Footer;

const Facebook = styled(FacebookIcon)``;
const Instagram = styled(InstagramIcon)``;
const LinkedIn = styled(LinkedInIcon)``;
const GitHub = styled(GitHubIcon)``;
const DoubleArrow = styled(DoubleArrowIcon)`
  transform: rotate(270deg);
`;

const Container = styled.div`
  background: #1b2538;

  .MuiSvgIcon-root {
    font-size: 30px;
    color: white;
  }

  p {
    color: #78829a;
    font-size: 12px;
    letter-spacing: 1.2px;
    padding-bottom: 20px;
    text-align: center;
  }

  span {
    color: #fcba04;
  }
`;

const ArrowContainer = styled.a`
  background: #fcba04;
  display: flex;
  height: 45px;
  width: 45px;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  top: -15px;
  animation: upDown 2s infinite ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #eaae07;
  }

  @keyframes upDown {
    50% {
      transform: translateY(5px);
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const IconBox = styled.div`
  background: #394560;
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 20px;

  &:hover {
    transform: translateY(3px);
    background-color: #313748;
  }
`;
