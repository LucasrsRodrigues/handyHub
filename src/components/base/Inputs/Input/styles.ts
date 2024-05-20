import styled from "styled-components/native";

export const WrapperInputIcon = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  padding: 15px;
  border-radius: 40px;

  flex-direction: row;

  gap: 10px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey_50,
}))`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey_10};
`;
