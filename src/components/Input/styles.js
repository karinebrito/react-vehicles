import styled from "styled-components";

export const Input = styled.div`
  height: 38px;
  border-radius: none;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
  font-size: 18px;
  &:focus {
    color: #333;
    background-color: none;
    border-color: none;
    outline: 0;
    box-shadow: none;
  }
`;
