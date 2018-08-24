import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: #ffffff;
  width: 320px;
  height: calc(100% - 60px);
  max-height: calc(100% - 60px);
  border-radius: 5px;
  padding: 0 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  ul {
    list-style: none;

    li {
      /* border: solid 1px red; */
    }
  }
`;

export const User = styled.li`
  padding: 15px 0;
  border-bottom: ${({ isLast }) => (isLast ? 'none' : 'solid 1px #eeeeee')};

  .user {
    background-color: transparent;
    border: none;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .description {
      min-width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;

      h1 {
        font-size: 16px;
        color: #333;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      span {
        font-size: 14px;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    button {
      margin: 0 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;

      i {
        font-size: 24px;
        color: #d45454;
      }
    }

    i {
      font-size: 20px;
      color: #999;
    }
  }
`;
