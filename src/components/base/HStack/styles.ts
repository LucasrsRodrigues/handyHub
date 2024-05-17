import styled from "styled-components/native";

export default interface HStackProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  spacing?: number;
}


export const Container = styled.View<HStackProps>`
  flex-direction: row;

  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};

  align-items: ${({ alignItems }) => alignItems || 'center'};

  ${({ spacing }) => spacing && `margin-right: ${spacing}px;`}

  > * {
    margin-right: ${({ spacing }) => spacing || 0}px;
  }
  
  > *:last-child {
    margin-right: 0;
  }
`;