import React, { ReactNode } from 'react';
import { TextInputProps } from 'react-native';

import { VStack, Text } from '@components/base';

import * as S from './styles';

interface IInputProps extends TextInputProps {
  label: string;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export function Input({ label, leftElement, rightElement, ...rest }: IInputProps) {

  return (
    <VStack spacing={10}>
      <Text>
        {label}
      </Text>

      <S.WrapperInputIcon>
        {leftElement && leftElement}

        <S.Input
          {...rest}
        />

        {rightElement && rightElement}
      </S.WrapperInputIcon>
    </VStack>
  );
}