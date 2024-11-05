import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  flex:1;
  background: ${({ theme }) => theme.colors.black};
`;

export const GoBackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;