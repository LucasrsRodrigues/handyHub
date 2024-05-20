import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("screen");

export const Container = styled.View`
  flex:1;
`;

export const ModalContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapperFlatList = styled.View`
  height: 400px;
  width: ${width * 0.8}px;
  color: #ffffff;
  background: #000000;
  border-radius: 12px;
`;

export const CountryItem = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
`;

export const CountryItemFlag = styled.Image`
  width: 40px;
  height: 30px;
  margin-right: 10px;

  border-radius: 5px;
`;