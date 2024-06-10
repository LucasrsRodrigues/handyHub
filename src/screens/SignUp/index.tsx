import React from 'react';
import { useTheme } from 'styled-components/native';

import { Heading, VStack, Input, Box, Button, Text } from '@components/base';

import * as S from './styles';

export function SignUp() {
  const theme = useTheme();

  return (
    <S.Container>
      <Heading>
        Sign up
      </Heading>

      <VStack spacing={25} marginTop={50}>
        <Input
          label='First Name'
          placeholder='Enter your First Name'
        />

        <Input
          label='Last Name'
          placeholder='Enter your Last Name'
        />

        <Input
          label='Phone Number'
          placeholder='Enter your Phone Number'
        />

        <Input
          label='Email'
          placeholder='Enter your Email'
        />

        <Input
          label='Password'
          placeholder='Enter your Password'
        />
      </VStack>

      <VStack
        marginTop={78}
        justifyContent="center"
        alignItems="center"
        spacing={30}
      >
        <Button
          label='Sign up'
          tintColor={theme.colors.white}
        />

        <Text variant='medium' color={theme.colors.grey_50}>
          Already have an Account? Sign in
        </Text>
      </VStack>
    </S.Container>
  );
}