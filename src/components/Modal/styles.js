import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 350px;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    h1 {
      font-weight: bold;
      font-size: 18px;
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }

    input[type='text'] {
      width: 100%;
      font-size: 16px;
      color: #333;
      height: 40px;
      border-radius: 5px;
      border: solid 1px #cccccc;
      outline: none;
      padding: 0 15px;
      margin-bottom: 10px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    i {
      font-size: 26px;
      color: #7159c1;
    }
  }
`;

export const Button = styled.button`
  outline: none;
  width: 48%;
  height: 40px;
  color: #fff;
  border: none;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${({ primary }) => (primary ? '#85c47c' : '#cccccc')};
`;
