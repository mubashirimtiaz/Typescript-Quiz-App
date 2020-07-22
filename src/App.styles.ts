import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background : #f7f7f7;
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
  }
`;
