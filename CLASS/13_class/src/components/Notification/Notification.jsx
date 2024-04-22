import styled, { css } from "styled-components";

const Notification = styled.div`
  border-radius: 8px;
  color: blue;
  background: transparent;
  border: 1px solid blue;
  padding: 10px 24px;
  cursor: pointer;
  transition: 300ms;

  ${(props) =>
    props.$primary &&
    css`
      background-color: blue;
      color: white;
    `}
`;

export default Notification;
