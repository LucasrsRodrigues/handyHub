import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex:1;
  background: ${({ theme }) => theme.colors.black};
`;

export const Avatar = styled.Image`
  width: ${wp(14.39)}px;
  height: ${wp(14.39)}px;
  border-radius: ${wp(7.5)}px;
`;

export const SelectButton = styled.TouchableOpacity``;

export const ButtonDivider = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  height: 3px;
  border-radius: 3px;
`;

export const ServiceContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;
export const ServiceImage = styled.Image`
  width: ${wp(38.67)}px;
  height: ${hp(8.94)}px;
  border-radius: 15px;
`;