import styled from "styled-components";

const Line = styled.li`
  list-style: none;
  border: 1px solid ${(props) => props.theme.BorColor};
  color: ${(props) => props.theme.TextcolorButtCre};
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  word-break: break-word;
  .active {
    opacity: 0.5;
    text-decoration: line-through;
  }
`;

export default Line;
