import React, { ReactNode } from 'react';

import VStackProps, * as S from './styles';

interface IVStackProps extends VStackProps {
  children: ReactNode;
  [key: string]: any;
}

export function VStack({
  children,
  alignItems = "flex-start",
  justifyContent = "flex-start",
  spacing = 0,
  ...rest
}: IVStackProps) {
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