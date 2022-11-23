import styled from "styled-components";

const MainSectionWrapper = styled.section`
  grid-row: 2/3;
  grid-column: center-start / center-end;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: max-content;
  /* align-content: end; */

  /* display: grid; */
  /* grid-template-rows: max-content 30rem; */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr; */

  /* margin-bottom: 15rem; */

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 5rem;
  }

  & .section__img {
    grid-row: 1/2;
    grid-column: 1/3;
    width: 100%;
    /* display: block; */
    height: 100%;
    object-fit: contain;
  }

  & .content {
    grid-row: 1/2;
    grid-column: 2/4;
    align-self: end;
    justify-self: center;

    padding-left: 3vw;
    padding-top: 3vw;
    background-color: var(--white);
    color: var(--black);
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    width: 100%;
    /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); */
    @media screen and (max-width: 1200px) {
      /* padding-left: 3rem; */
      margin: 0 auto;
    }

    & h3 {
      font-size: 6rem;
      text-transform: uppercase;
      font-family: var(--font-josef);
      margin-bottom: 3rem;
      width: 40vw;

      @media screen and (max-width: 1200px) {
        /* font-size: 3.5rem; */
      }
      @media screen and (max-width: 1000px) {
        font-size: 5rem;
        text-align: center;

        width: 100%;
      }
    }

    & p {
      font-size: 1.8rem;
      word-spacing: 1.3px;
      color: var(--very-dark-gray);
      letter-spacing: 1.2px;
      font-family: var(--font-alata);
      width: 80%;
      @media screen and (max-width: 1000px) {
        font-size: 1.9rem;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
`;

export default MainSectionWrapper;
