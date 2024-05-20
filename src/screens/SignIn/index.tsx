import React, { useState } from 'react';

import {
  CountryInput,
  VStack,
  HStack,
  Heading,
  Text,
  Checkbox,
  Button
} from '@components/base';

import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { Box, SocialButton } from '@components/base';

// {"height": 926, "width": 428}


export function SignIn() {
  const [isChecked, setIsChecked] = useState(false);

  const theme = useTheme();

  return (
    <S.Container>
      <Heading weight='semibold'>
        Sing in
      </Heading>

      <VStack spacing={15} marginTop={50}>
        <CountryInput
          label='Phone Number'
        />

        <HStack spacing={12}>
          <Checkbox
            isChecked={isChecked}
            onPress={() => setIsChecked(prev => !prev)}
          />

          <Text color={theme.colors.grey_70}>
            I agree to UIKit Public Agreement, Terms, Privacy{"\n"}
            Policy.
          </Text>
        </HStack>
      </VStack>

      <Box marginTop={80}>
        <Button
          label='Sign in'
          disabled={!isChecked}
        />
      </Box>

      <Box marginTop={30}>
        <Text variant='large' textAlign='center'>
          Continue as a Guest
        </Text>
      </Box>

      <HStack
        justifyContent="center"
        alignItems="center"
        spacing={8}
        marginTop={50}
      >
        <S.Line />
        <Text>Or</Text>
        <S.Line />
      </HStack>

      <VStack spacing={15} marginTop={32}>
        <SocialButton type='google' />
        <SocialButton type='facebook' />
        <SocialButton type='apple' />
      </VStack>

      <HStack
        justifyContent='center'
        alignItems="center"
        spacing={5}
        marginTop={46}
      >
        <Text color={theme.colors.grey_50}>
          Create a New Account?
        </Text>

        <Button
          label='Sign up'
          type='outline'
          tintColor={theme.colors.main}
        />
      </HStack>

    </S.Container>
  );
}