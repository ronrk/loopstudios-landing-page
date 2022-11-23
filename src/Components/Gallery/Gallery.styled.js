import styled from "styled-components";

const GalleryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  grid-row: 3/4;
  grid-column: center-start / center-end;
  width: 100%;
  margin-top: 14rem;

  @media screen and (max-width: 1000px) {
  }

  & .gallery__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    @media screen and (max-width: 1000px) {
      /* justify-content: center; */
    }

    & h2 {
      font-size: 4rem;
      font-family: var(--font-josef);
      text-transform: uppercase;
      @media screen and (max-width: 1000px) {
        /* text-align: center; */
      }
    }

    & .btn-transparent {
      text-transform: uppercase;
      font-family: var(--font-alata);
      font-size: 1.2rem;
      letter-spacing: 1.2px;
      border: 1px solid var(--black);
      padding: 0.7rem 3.5rem;
      transition: all 0.2s;
      align-self: flex-end;

      @media screen and (max-width: 1000px) {
        /* position: absolute; */
        /* bottom: 0; */
      }

      &:hover {
        background-color: var(--black);
        color: var(--white);
      }
    }
  }

  & .gallery {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin: 0 auto;
    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;

      align-items: center;
      width: 100%;
    }

    & figure {
      width: 100%;
      position: relative;
      @media screen and (max-width: 800px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        @media screen and (max-width: 800px) {
          width: 80%;
          height: 20vh;

          object-fit: cover;
          object-position: top;
        }
      }

      & figcaption {
        font-size: 3rem;
        text-transform: uppercase;
        display: block;
        font-family: var(--font-josef);
        color: var(--white);
        position: absolute;
        bottom: 1rem;
        padding: 3rem;
        width: 7ch;

        @media screen and (max-width: 800px) {
          left: 10rem;
          padding: 1.1rem;
          font-size: 2.4rem;
        }
      }
    }
  }
`;

export default GalleryWrapper;
