import styled from "styled-components";
import bgDesketop from "../../assets/images/desktop/image-hero.jpg";

const HeroWrapper = styled.header`
  background-image: url(${bgDesketop});
  background-size: cover;
  background-repeat: no-repeat;
  padding: var(--main-padding);
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  .title {
    width: 60%;
    align-self: flex-start;
    margin: auto 0;
  }

  & h1 {
    font-size: 6rem;
    display: inline-block;
    width: 90%;
    padding: 3rem;
    padding-right: 0;
    color: var(--white);
    font-family: var(--font-josef);
    text-transform: uppercase;

    border: 3px solid var(--white);
  }
`;

export default HeroWrapper;
