import React, { ReactNode } from 'react';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from 'styled-components/native';

import ArrowLeft from "@assets/icons/outline/Left 1.svg";
import { HStack, Heading, Box } from '@components/base';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface IInternalWrapperProps {
  children: ReactNode;
  title: string;
  goBackTo: string;
}

export function InternalWrapper({ children, title, goBackTo }: IInternalWrapperProps) {
  const theme = useTheme();
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <HStack
        spacing={12}
        paddingTop={50}
        paddingX={15}
      >

        <S.GoBackButton onPress={() => navigate(goBackTo)}>
          <ArrowLeft
            fill="#ffffff"
          />

          <Heading
            variant='heading3'
            color='#ffffff'
            weight='semibold'
          >
            {title}
          </Heading>
        </S.GoBackButton>
      </HStack>

      <Box
        backgroundColor={theme.colors.white}
        paddingX={15}
        paddingTop={30}
        marginTop={20}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        minHeight={heightPercentageToDP(100) - 70}
        paddingBottom={100}

      >
        {children}
      </Box>
    </S.Container>
  );
}