import React from 'react';

import { VStack, HStack, Box, Text } from '@components/base';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components/native';
import * as S from './styles';

export function ServiceCard() {
  const theme = useTheme();

  return (
    <S.ServiceContainer>
      <S.ServiceImage
        source={{
          uri: "https://www.mpires.com.br/wp-content/uploads/2017/09/shutterstock-1177368733.png"
        }}
      />

      <VStack spacing={2} marginTop={10}>
        <Text
          variant='large'
          weight='semibold'
        >
          Home Cleaning
        </Text>

        <Text
          variant='small'
          weight='regular'
          maxWidth={widthPercentageToDP(38.67)}
          numberOfLines={1}
          color={theme.colors.grey_50}
        >
          Lorem ipsum dolor sit amet
        </Text>

        <HStack justifyContent="space-between">
          <Box
            bg="#ffffff"
            paddingX="10px"
            paddingY="5px"
            borderRadius={30}
          >
            <Text
              variant='xsmall'
              weight='regular'
            >
              4.8 (87)
            </Text>
          </Box>

          <Box
            bg={theme.colors.main}
            paddingX="10px"
            paddingY="3px"
            borderRadius={30}
          >
            <Text
              variant='small'
              weight='medium'
              color={theme.colors.white}
            >
              R$ 100
            </Text>
          </Box>
        </HStack>
      </VStack>
    </S.ServiceContainer>
  );
}