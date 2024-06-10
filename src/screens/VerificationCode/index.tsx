import React from 'react';

import * as S from './styles';
import { Box, Button, Heading, HStack, Text, VStack } from '@components/base';
import { useTheme } from 'styled-components/native';

export function VerificationCode() {
  const theme = useTheme();

  return (
    <S.Container>
      <VStack spacing={15}>
        <Heading weight='semibold'>
          Verification code
        </Heading>

        <Text
          variant='large'
          weight='regular'
          color={theme.colors.grey_50}
        >
          We just send you a verify code. Check your inbox to get them.
        </Text>
      </VStack>

      <HStack spacing={10} marginTop={50}>
        <Box
          backgroundColor={theme.colors.background}
          height={60}
          width={60}
          borderRadius={30}
          alignItems="center"
          justifyContent="center"
        >
          <Heading variant='heading3' weight='semibold'>
            4
          </Heading>
        </Box>

        <Box
          backgroundColor={theme.colors.background}
          height={60}
          width={60}
          borderRadius={30}
          alignItems="center"
          justifyContent="center"
        >
          <Heading variant='heading3' weight='semibold'>
            2
          </Heading>
        </Box>

        <Box
          backgroundColor={theme.colors.black}
          height={60}
          width={60}
          borderRadius={30}
          alignItems="center"
          justifyContent="center"
        >

        </Box>

        <Box
          backgroundColor={theme.colors.white}
          height={60}
          width={60}
          borderRadius={30}
          alignItems="center"
          justifyContent="center"
          borderColor={theme.colors.grey_70}
          borderWidth={1}
        >

        </Box>
      </HStack>

      <Box marginTop={50} width="100%">

        <Button
          label='Continue'
          tintColor='#ffffff'
        />
      </Box>


    </S.Container>
  );
}