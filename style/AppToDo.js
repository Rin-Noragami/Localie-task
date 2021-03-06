import styled from "styled-components";

const AppTodostyle = styled.div`
  max-width: 500px;
  width: 100%;
  min-height: 400px;
  background-color: ${(props) => props.theme.BGcolorCard};
  box-shadow: 0px 0px 5px 1px ${(props) => props.theme.BorColor};
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

export default AppTodostyle