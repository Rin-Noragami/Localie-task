import styled from "styled-components";

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: ${(props) => props.theme.BorColor};
`;

export default Row;
