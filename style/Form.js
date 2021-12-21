import styled from "styled-components";

const StyleForm = styled.div`
  form {
    width: 100%;
    height: 40px;
    margin: 20px 0;
    display: flex;
  }

  form input {
    background: rgb(36, 36, 36);
    color: rgb(200, 200, 200);
  }

  form input,
  form button {
    flex: 3;
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(200, 200, 200);
    margin: 0 5px;
  }

  form button {
    flex: 1;
    background: rgb(57, 223, 167);
    color: black;
    letter-spacing: 2px;
    cursor: pointer;
  }
`;

export default StyleForm