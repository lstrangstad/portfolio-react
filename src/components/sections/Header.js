import { useRef, useEffect } from "react";
import Typical from "react-typical";
import styled from "styled-components";
import mobileImg from "../../images/code5.jpg";
import arrow from "../../icons/right-arrow.svg";

const Header = () => {
  return (
    <Wrapper id="home">
      <div className="header">
        <h1 className="header__heading">
          Hello, I´m <span>Linus Strangstad</span>. I'm a front-end web
          developer.
        </h1>
        <Typical
          className="header__typing"
          steps={[
            "HTML..",
            500,
            "CSS..",
            500,
            "JS..",
            500,
            "React..",
            500,
            "Sass..",
            500,
            "Git",
            500,
          ]}
          loop={Infinity}
          wrapper="h2"
        />
        <a className="header__link" href="#projects">
          My Projects <img src={arrow} alt="arrow" />
        </a>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  height: 100vh;
  background: #36445a;
  background-image: url(${mobileImg});
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  display: flex;

  .header {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    &__heading {
      color: white;
      font-size: 24px;
      padding-bottom: 20px;

      span {
        color: #fcba04;
      }
    }

    h2 {
      color: white;
      font-size: 20px;
    }

    &__link {
      margin-top: 20px;
      padding: 10px 20px;
      border: 1px solid;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 18px;
      transition: all 250ms ease-in-out;

      &:hover {
        background-color: #ff785a;
        border: 1px solid #ff785a;

        img {
          transition: all 250ms ease-out;
          transform: rotate(90deg);
        }
      }

      img {
        width: 20px;
        margin-left: 10px;
        filter: invert(100%) sepia(1%) saturate(1035%) hue-rotate(233deg)
          brightness(117%) contrast(100%);
        transition: all 250ms ease-in-out;
      }
    }
  }
`;
