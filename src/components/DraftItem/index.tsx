import React from 'react';
import { useTheme } from 'styled-components/native';

import { Box, VStack, HStack, Heading, Text } from '@components/base';
import { ServiceSVGIcon } from '@components/serviceSVGIcon';

import SupremeIcon from "@assets/supreme-icon.svg";
import CalendarIcon from "@assets/icons/bold/Calender.svg";
import CallIcon from "@assets/icons/bold/Call.svg";
import MessageIcon from "@assets/icons/bold/Message-1.svg";

export function DraftItem() {
  const theme = useTheme();

  return (
    <Box
      backgroundColor={theme.colors.background}
      width="100%"
      padding={15}
      borderRadius={25}
    >
      <VStack spacing={10}>
        <VStack>
          <HStack
            spacing={12}
          >
            <Box
              width={70}
              height={70}
              backgroundColor={theme.colors.white}
              borderRadius={35}
              justifyContent="center"
              alignItems="center"
            >
              <ServiceSVGIcon service='ac_repair_icon' />
            </Box>

            <VStack spacing={4} >
              <Heading
                variant='heading4'
                weight='semibold'
                color={theme.colors.black}
              >
                Home Cleaning
              </Heading>

              <Text
                weight='regular'
                color={theme.colors.grey_50}
              >
                Service name
              </Text>
            </VStack>
          </HStack>

          <Box
            height={1}
            width="100%"
            borderWidth={0.5}
            borderStyle="dashed"
            borderColor={theme.colors.grey_50}
            marginTop={25}
          />
        </VStack>

        <HStack
          justifyContent="space-between"
        >
          <Text
            weight='regular'
            variant='medium'
            color={theme.colors.grey_50}
          >
            Status
          </Text>

          <Box
            // padding="4px"
            paddingY="4px"
            paddingX={10}
            backgroundColor={theme.colors.orange}
            opacity={0.4}
            borderRadius={100}
          >
            <Text
              variant='small'
              weight='medium'
              color={theme.colors.white}
            >
              Draft
            </Text>
          </Box>
        </HStack>

        <HStack
          justifyContent="space-between"
        >
          <Text
            weight='regular'
            variant='medium'
            color={theme.colors.grey_50}
          >
            Schedule
          </Text>

          <Text
            weight='medium'
            variant='medium'
            color={theme.colors.black}
          >
            4 Nov, 10:00-11:00 Am
          </Text>

        </HStack>
      </VStack>
    </Box>
  );
}