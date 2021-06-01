import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="#home">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#about">
            About
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#projects">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  background-color: #2a3650;
  border-bottom: 2px solid #ff785a;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 20px;
    gap: 20px;
  }

  li {
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid;
      color: #fcba04;
    }
  }

  @media (min-width: 820px) {
    ul {
      justify-content: left;
      padding: 20px 40px;
    }
  }
`;
