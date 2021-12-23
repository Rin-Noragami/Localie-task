import styled from "styled-components";
import Button from "./Button";

const ButtonEdDel = styled(Button)`
  background: ${(props) => props.theme.BGcolorCard};
  color: ${props => props.Edit ? "rgb(30,144,255)" : "rgb(220,20,60)"};
  border: 1px solid ${props => props.Edit ? "rgb(30,144,255)" : "rgb(220,20,60)"};
  &:disabled{
    opacity: 0.5;
    cursor: not-allowed;
}
`;

export default ButtonEdDel;