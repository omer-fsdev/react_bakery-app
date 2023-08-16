import styled from "styled-components";

const DisplayStyle = styled.div`
  background-color: #dff2f2;
  color: #f23207;
  border-radius: 9px;
  display: flex;
  text-align: justify;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  font-family: "Brush Script MT", cursive;
  font-size: 2.4rem;
  @media (max-width: ${({ theme }) => theme.myResponsive}) {
    flex-direction: column;
  }
`;

export default DisplayStyle;
