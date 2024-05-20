import styled from "styled-components/native";
import { border, color, flexbox, layout, position, space } from "styled-system";
import IHStackProps from "./hstack";


export const Container = styled.View<IHStackProps>`
  flex-direction: row;
  
  gap: ${({ spacing }) => spacing}px;
`;