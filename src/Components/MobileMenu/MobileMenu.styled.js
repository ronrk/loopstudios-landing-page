import styled from "styled-components";

const MenuWrapper = styled.div`
  grid-row: 1 / -1;
  grid-column: full-start / full-end;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background-color: var(--black);
  padding: 2rem 6rem;
  position: fixed;

  & ul {
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;

    list-style: none;

    & li {
      padding: 2rem 0;
    }

    & a {
      text-decoration: none;
      font-size: 4rem;
      color: var(--white);
      text-transform: uppercase;
      font-family: var(--font-josef);

      &:hover {
        color: var(--dark-gray);
      }
    }
  }
`;

export default MenuWrapper;
