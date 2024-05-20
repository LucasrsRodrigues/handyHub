import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 70px 15px;
`;


export const Line = styled.View`
  height: 1px;
  width: 120px;
  background: ${({ theme }) => theme.colors.grey_70};
`;