import styled from "styled-components";

const StyledNotification = styled.div`
  border-radius: 8px;
  background-color: blue;
  color: white;
  border: none;
  padding: 10px 24px;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    background-color: darkblue;
  }
`;

export default StyledNotification;
