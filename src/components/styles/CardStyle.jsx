import styled from "styled-components";

const CardStyle = styled.div`
  padding: 60px;
  color: #093773;
  background-color: #ffddff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: italic;
  margin: 11px auto;
  font-family: Georgia, serif;
  gap: 50px;
  font-size: 1.6rem;
  text-align: center;
  flex-direction: ${({ reverse }) => reverse || "row"};
  @media (max-width: ${({ theme }) => theme.myResponsive}) {
    flex-direction: column;
  }
`;

export default CardStyle;
