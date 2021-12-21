import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding:0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
}
body{
    background-color: rgb(20, 20, 20);
}


label{
    cursor: pointer;
}
h2{
    text-align: center;
    color: fuchsia;
}
ul li{
    list-style: none;
    border: 1px solid rgb(200, 200, 200);
    color: white;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    word-break: break-word;
}
ul li .active{
    opacity: 0.5;
    text-decoration: line-through;
}

ul li input,
.row input{
    margin-right: 5px;
    transform: translateY(1px);
}
ul li button,
.row button{
    border:none;
    outline: none;
    border: 1px solid rgb(33, 122, 255);
    color: rgb(33, 122, 255);
    padding: 5px 15px;
    cursor: pointer;
    background: rgb(46, 46, 46);
}
ul li button:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}
.row{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: white;
}
.row #delete{
    border: 1px solid fuchsia;
    color: fuchsia;
}
`;

export default Global