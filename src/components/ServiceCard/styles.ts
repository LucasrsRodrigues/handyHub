import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const ServiceContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
  border-radius: 20px;
`;

export const ServiceImage = styled.Image`
  width: ${widthPercentageToDP(38.67)}px;
  height: ${heightPercentageToDP(8.94)}px;
  border-radius: 15px;
`;