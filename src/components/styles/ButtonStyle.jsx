import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${({ bgSecond }) => bgSecond || "#F279C8"};
  color: ${(props) => props.colorSecond || "#F2CB05"};
  border: 1px solid #f2cf1d;
  border-radius: 5px;
  font-family: Verdana, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 1rem 1.2rem;
  font-size: 1.1rem;
  margin: 2rem 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.97);
  }
`;

export default ButtonStyle;
