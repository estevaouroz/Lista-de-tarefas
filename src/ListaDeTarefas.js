import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: auto;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  display: flex;
  align-items: center;     
  justify-content: center;
  padding: 20px;           
  box-sizing: border-box;
`;

export const List = styled.ul`
    padding: 0;
    margin-top: 30px;
`;

export const Item = styled.li`
    font-weight: 400;
    color: #000000;
    font-size: 15px;
    background: #E4E4E4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    list-style-type: none;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const TodoList = styled.div`
    background: #FFFFFF;
    padding: 30px 20px;
    border-radius: 5px;
`;

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    font-weight: 400;
    font-size: 15px;
    outline: none;
    padding-left: 10px;
`;

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #FFFFFF;
    cursor: pointer;
    margin-left: 20px;
`;

export const ButtonSmall = styled.button`
    background: #ff4f4f;
    border-radius: 5px;
    border: none;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;

    &:nth-child(3) {
        background: #52b788; /* botão de editar */
    }
`;

export const ButtonIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;

  &:hover {
    color: #8052ec;
    transform: scale(1.1);
  }
`;