import styled from "styled-components";

const SpanChat = styled.span`
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-0);
  cursor: pointer;
  position: fixed;
  right: 10px;
  bottom: 20px;

  .notification {
    position: absolute;
    top: -10px;
    left: 0px;
  }
`

export default SpanChat;