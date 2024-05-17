import React, { ReactNode } from 'react';

import HStackProps, * as S from './styles';

interface IHStackProps extends HStackProps {
  children: ReactNode;
  [key: string]: any;
}

export function HStack({
  children,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  spacing = 0,
  ...rest
}: IHStackProps) {
  return (
    <S.Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      spacing={spacing}
      {...rest}
    >
      {children}
    </S.Container>
  );
}