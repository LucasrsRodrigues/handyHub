import React from 'react';

import * as S from './styles';
import { Heading, Text } from '@components/base';
import { useTheme } from 'styled-components/native';

export function Onboarding() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.OnboardingMessage>
        <Heading weight='bold' textAlign='center'>
          Beauty parlour{'\n'}
          at your home
        </Heading>

        <Text
          variant='large'
          color={theme.colors.grey_50}
          textAlign='center'
        >
          Lorem ipsum is a placeholder text{"\n"}
          commonly used to demonstrate the visual.
        </Text>

        <S.Button>
          <Text
            variant='large'
            weight='medium'
            color={theme.colors.white}
            textAlign="center"
          >
            Next
          </Text>
        </S.Button>
      </S.OnboardingMessage>
    </S.Container>
  );
}