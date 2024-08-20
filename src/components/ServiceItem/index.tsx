import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

import { Text } from '@components/base';

import * as S from './styles';

interface IServiceItemProps extends TouchableOpacityProps {
  label: string;
  icon: React.FC<SvgProps>;
}

export function ServiceItem({ label, icon: Icon, ...rest }: IServiceItemProps) {
  return (
    <S.Container {...rest}>

      <S.ItemButton>
        <Icon />
      </S.ItemButton>

      <Text variant='small'>
        {label}
      </Text>

    </S.Container>
  );
}