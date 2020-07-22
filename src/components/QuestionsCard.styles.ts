import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 500px;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }
  button {
    min-width: 350px;
    color: #f7f7f7;
    display: block;
    margin: 5px 0;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 1.2rem;

    background: ${({ correct, userClicked }) =>
      correct
        ? "yellowgreen"
        : !correct && userClicked
        ? "crimson"
        : "#757575"};
  }
`;
