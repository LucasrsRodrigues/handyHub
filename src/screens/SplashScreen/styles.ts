import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("screen");

export const Container = styled.View`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  /* background: ${({ theme }) => theme.colors.main}; */
`;

export const CircleOne = styled.View`
  position: absolute;
  top: 0;
  right: -${width / 6}px;

  width: 238px;
  height: 238px;
  border-radius: 124px;

  background: ${({ theme }) => theme.colors.warning};
`;