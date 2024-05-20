import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components/native';

import { Text } from '@components/base';

import IRNButtonProps, * as S from './styles';

interface IButtonProps extends TouchableOpacityProps, IRNButtonProps {
  label: string;
  tintColor?: string;
}

export function Button({ label, size = "medium", color = "main", type = "default", tintColor = "#040404", ...rest }: IButtonProps) {
  const theme = useTheme();

  return (
    <S.Button
      size={size}
      color={color}
      type={type}
      {...rest}
    >
      <Text
        variant='large'
        weight='medium'
        color={rest.disabled ? theme.colors.grey_40 : tintColor}
        textAlign="center"
      >
        {label}
      </Text>
    </S.Button>
  );
}