import React from 'react';
import { TextProps } from 'react-native'; "react-native";

import IRNTextProps, * as S from './styles';

interface ITextProps extends TextProps, IRNTextProps {
  children: string | Array<string>;
}

export function Text({
  children,
  variant = "medium",
  color = "#040404",
  weight = "medium",
  textAlign = 'left',
  ...rest
}: ITextProps) {
  return (
    <S.TextContainer
      variant={variant}
      color={color}
      weight={weight}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </S.TextContainer>
  );
}