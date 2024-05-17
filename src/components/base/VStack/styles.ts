import styled from "styled-components/native";

export default interface VStackProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  spacing?: number;
}


export const Container = styled.View<VStackProps>`
  flex-direction: column;

  justify-content: ${({ justifyContent }) => justifyContent};

  align-items: ${({ alignItems }) => alignItems};

  /* ${({ spacing }) => spacing && `margin-bottom: ${spacing}px;`}; */
  gap: ${({ spacing }) => spacing}px;

  /* > * {
    margin-bottom: ${({ spacing }) => spacing || 0}px;
  }

  > *:last-child {
    margin-bottom: 0;
  } */
`;