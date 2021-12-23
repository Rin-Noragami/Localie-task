import styled from "styled-components";

const Button = styled.button`

  font-size: 0.8em;
  letter-spacing: 0.2rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${(props) => props.theme.BorColor};
  cursor: pointer;
  background: ${(props) => props.theme.BGcolorButtCre};
  color: ${(props) => props.theme.TextcolorButtCre};
  padding: 5px 10px;
`;

export default Button;
