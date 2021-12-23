import styled from "styled-components";

const Inputstyle = styled.input`
  font-size: 1em;
  padding: 5px;
  background-color: ${(props) => props.theme.BGcolorCard};
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.BorColor};
  color: ${(props) => props.theme.TextcolorButtCre};
`;

export default Inputstyle