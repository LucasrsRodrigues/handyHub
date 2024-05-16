import styled from "styled-components/native";

export default interface VStackProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  spacing?: number;
}


export const Container = styled.View<VStackProps>`
  flex-direction: column;

  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

  align-items: ${({ alignItems }) => alignItems || 'stretch'};

  ${({ spacing }) => spacing && `margin-bottom: ${spacing}px;`}

  > * {
    margin-bottom: ${({ spacing }) => spacing || 0}px;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;