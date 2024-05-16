import React from 'react';
import { TextProps } from 'react-native'; "react-native";

import IRNTextProps, * as S from './styles';

interface IHeadingProps extends TextProps, IRNTextProps {
  children: string | Array<string>;
}

export function Heading({
  children,
  variant = "heading1",
  color = "#000000",
  weight = "medium",
  ...rest
}: IHeadingProps) {
  return (
    <S.HeadingContainer
      variant={variant}
      color={color}
      weight={weight}
      {...rest}
    >
      {children}
    </S.HeadingContainer>
  );
}