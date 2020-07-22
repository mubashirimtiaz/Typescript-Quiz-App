import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
      background: linear-gradient(to right, #f7f7f7, #ffffff);
    margin : 0;
    display : flex;
    justify-content : center;
    align-items : center;
}
*{
    box-sizing: border-box;
    font-family: arial
}
`;
export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  align-items: center;
  > p {
    text-align: center;
    color: #757575;
    font-size: 1.2rem;
  }
  .score {
    font-size: 2rem;
    color: #757575;
    margin: 0;
  }
  h1 {
    font-size: 4.5rem;
    font-weight: 300;
    text-shadow: 1px 1px 2px #757575;
  }
  .start,
  .next {
    cursor: pointer;
    width: 300px;
    padding: 10px;
    background: cadetblue;
    color: white;
    font-size: 1.2rem;
    border-radius: 5px;
    border: none;
    outline: none;
    margin: 10px 0;
    box-shadow: 1px 1px 5px #aaaaaa;
  }

  .loader {
    margin: 30px auto;
    border: 16px solid #e7e7e7;
    width: 150px;
    height: 150px;
    /* border-top-color: #1abc9c;
  border-bottom-color: #3498db; */
    border-radius: 50%;
    animation: coloredSpin 6s linear infinite;
  }

  /* @keyframes spin{
  0%{
    transform: rotate(0deg) scale(1);
  }
  100%{
    transform: rotate(360deg);
  }
}
 */
  @keyframes coloredSpin {
    0% {
      transform: rotate(0deg) scale(1);
      border-top-color: #aaaaaa;
      border-bottom-color: #aaaaaa;
    }
    /* 25% {
    border-top-color: #fd1d1d;
    border-bottom-color: #fd1d1d;
  }
  50% {
    transform: rotate(360deg) scale(1.08);
    border-top-color: #fcb045;
    border-bottom-color: #fcb045;
  }
  75% {
    border-top-color: #fd1d1d;
    border-bottom-color: #fd1d1d;
  } */
    100% {
      transform: rotate(720deg) scale(1);
      border-top-color: #dddddd;
      border-bottom-color: #dddddd;
    }
  }
`;
