import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--black);

  grid-column: full-start/full-end;
  grid-row: 4/5;

  padding: var(--main-padding);
  padding-top: 2rem;
  padding-bottom: 4rem;

  & .footer__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }

    & .social-icons {
      display: flex;
      align-items: center;
      gap: 2rem;

      & .icon-container {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;

        &::before {
          /* display: none; */
          content: "";
          position: absolute;
          width: 2rem;
          height: 3px;
          background-color: var(--white);
          opacity: 0;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.2s;
        }
        &:hover {
          &::before {
            opacity: 1;
          }
        }
      }

      & .footer__icon {
        cursor: pointer;
      }
    }
  }

  & .footer__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
      flex-direction: column;
      justify-content: center;

      gap: 3rem;
    }

    & .footer__list {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3rem;

      & li {
        & a {
          font-size: 1.8rem;
          text-transform: capitalize;
          text-decoration: none;
          color: var(--white);
          font-family: var(--font-josef);
          position: relative;

          &::before {
            /* display: none; */
            content: "";
            position: absolute;
            width: 2rem;
            height: 3px;
            background-color: var(--white);
            opacity: 0;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.2s;
          }
          &:hover {
            &::before {
              opacity: 1;
            }
          }
        }
      }
    }

    & span {
      color: var(--white);
      font-size: 1.2rem;
      color: var(--dark-gray);
      letter-spacing: 1px;
      word-spacing: 1.5px;
      font-family: var(--font-josef);
    }
  }
`;

export default FooterWrapper;
