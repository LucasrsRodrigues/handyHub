import { Dimensions } from "react-native";
import styled from "styled-components/native";


export const WrapperInput = styled.View`
  width: 100%;
`;

export const WrapperInputIcon = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
  padding: 15px;
  border-radius: 40px;

  flex-direction: row;

  gap: 10px;
`;


export const CountryButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

export const CountryFlag = styled.Image`
  width: 24px;
  height: 14px;

  /* margin-right: 10px; */
`;

export const CountryCallingCodes = styled.Text``;

export const Pipe = styled.View`
  width: 1px;
  height: 12px;
  background: ${({ theme }) => theme.colors.grey_50};
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey_50,
}))`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey_10};
`;
