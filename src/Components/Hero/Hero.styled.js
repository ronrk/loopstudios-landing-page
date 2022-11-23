import styled from "styled-components";
import bgDesketop from "../../assets/images/desktop/image-hero.jpg";

const HeroWrapper = styled.header`
  background-image: url(${bgDesketop});
  background-size: cover;
  background-repeat: no-repeat;
  grid-row: 1/2;
  grid-column: full-start/ full-end;

  display: grid;
  grid-template-columns: repeat(8, 1fr);

  .title {
    grid-column: 2/5;
    align-self: center;
    /* width: 60%; */
    /* margin: auto 0; */
    @media screen and (max-width: 1200px) {
      /* margin: auto auto; */
    }
  }

  & h1 {
    font-size: 6rem;
    display: inline-block;
    padding: 1.125rem;
    padding-right: 0;
    color: var(--white);
    font-family: var(--font-josef);
    text-transform: uppercase;

    border: 3px solid var(--white);

    /* width: 90%; */
    @media screen and (max-width: 1200px) {
      /* width: 100%; */
      /* font-size: 5rem; */
    }
  }
`;

export default HeroWrapper;
