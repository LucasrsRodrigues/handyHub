import React from 'react';

import ITextProps from './text';

import * as S from './styles';

export function Text({
  children,
  variant = "medium",
  color = "#040404",
  weight = "medium",
  ...rest
}: ITextProps) {
  return (
    <S.TextContainer
      variant={variant}
      color={color}
      weight={weight}
      {...rest}
    >
      {children}
    </S.TextContainer>
  );
}