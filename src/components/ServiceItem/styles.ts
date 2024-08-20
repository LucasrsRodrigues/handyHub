import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  
`;

export const ItemButton = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.background};

  align-items: center;
  justify-content: center;
`;