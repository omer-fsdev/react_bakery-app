import styled from "styled-components";

const ImageStyle = styled.img`
  width: 350px;
  border: 1px solid #F2CF1D;
  border-radius: 8px;
  margin: 20px 0;
`;

export const LogoStyle = styled.img`
  background-color: ${({ theme }) => theme.colors.myLogo};
  width: 300px;
  padding: 2rem;
  border-radius: 0 0 80px 0;
`;

export default ImageStyle;
