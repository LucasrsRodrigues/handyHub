import React, { useState } from 'react';

import * as S from './styles';
import { Heading, Text } from '@components/base';
import { useTheme } from 'styled-components/native';
import { VStack } from '@components/base/VStack';
import { ImageBackground } from 'react-native';

const steps = [
  {
    id: "0",
    hero: "Beauty parlour at your home",
    text: "Lorem ipsum is a placeholder text\ncommonly used to demonstrate the visual.",
    background: "#D9CED4"
  },
  {
    id: "1",
    hero: "Painting & expert nearby you",
    text: "Lorem ipsum is a placeholder text\ncommonly used to demonstrate the visual.",
    background: "#8570A0"
  },
  {
    id: "2",
    hero: "Professional home cleaning",
    text: "Lorem ipsum is a placeholder text\ncommonly used to demonstrate the visual.",
    background: "#F4AA2F"
  },
]

export function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  const theme = useTheme();

  return (
    <S.Container background={steps[activeStep].background}>
      <S.OnboardingMessage >
        <VStack spacing={10} justifyContent='center' alignItems='center'>
          <Heading weight='bold' textAlign='center'>
            {steps[activeStep].hero}
          </Heading>

          <Text
            variant='large'
            color={theme.colors.grey_50}
            textAlign='center'
          >
            {steps[activeStep].text}
          </Text>

          <S.Button onPress={() => setActiveStep(prev => prev + 1)}>
            <Text
              variant='large'
              weight='medium'
              color={theme.colors.white}
              textAlign="center"
            >
              Next
            </Text>
          </S.Button>
        </VStack>

      </S.OnboardingMessage>
    </S.Container>
  );
}