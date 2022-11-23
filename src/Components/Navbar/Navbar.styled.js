import styled from "styled-components";

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-row: 1/2;
  grid-column: center-start/ center-end;
  z-index: 20;
  align-self: start;
  margin-top: 4rem;

  & .nav__list {
    list-style: none;
    display: flex;

    & li {
      padding: 0 2rem;
      & a {
        font-family: var(--font-alata);
        text-decoration: none;
        color: var(--white);
        font-size: 1.6rem;
        position: relative;

        &::after {
          width: 2rem;
          height: 3px;
          content: "";
          display: none;
          position: absolute;
          background-color: var(--white);
          left: 50%;
          transform: translateX(-50%);
          bottom: -0.5rem;
          opacity: 0;
        }
        &:hover {
          &::after {
            display: block;
            opacity: 1;
          }
        }
      }
    }
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
  & .btn-menu {
    display: none;

    @media screen and (max-width: 750px) {
      display: block;
    }
  }
`;

export default NavbarWrapper;
