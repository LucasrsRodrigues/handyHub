import React, { useState } from 'react';
import { Box, Button, Heading, HStack, Input, Text, VStack } from '@components/base';

import LocationIcon from "@assets/icons/bold/Location.svg";
import SearchIcon from "@assets/icons/outline/search.svg";
import MicrophoneIcon from "@assets/icons/bold/Microphone 1.svg";

import CleaningIcon from "@assets/services/Cleaning.svg";
import PaintingIcon from "@assets/services/Painting.svg";
import BeautyIcon from "@assets/services/Beauty.svg";
import ApplianceIcon from "@assets/services/Appliance.svg";
import ACRepairIcon from "@assets/services/AC Repair.svg";

import { useTheme } from 'styled-components/native';

import { ServiceItem } from '@components/ServiceItem';

import * as S from './styles';
import { ServiceCard } from '@components/ServiceCard';

const servicesOptions = [
  {
    id: 0,
    label: "Cleaning",
    icon: CleaningIcon
  },
  {
    id: 1,
    label: "Painting",
    icon: PaintingIcon
  },
  {
    id: 2,
    label: "Beauty",
    icon: BeautyIcon
  },
  {
    id: 3,
    label: "Appliance",
    icon: ApplianceIcon
  },
  {
    id: 4,
    label: "AC Repair",
    icon: ACRepairIcon
  },
];

const servicesList = [
  {
    id: "0",
    label: "All"
  },
  {
    id: "1",
    label: "Trending"
  },
  {
    id: "2",
    label: "Summer Offer"
  },
  {
    id: "3",
    label: "Promotion"
  },
]

export function Home() {
  const theme = useTheme();
  const [selectedPopularService, setSelectedPopularService] = useState("All");

  return (
    <S.Container>
      <HStack
        spacing={12}
        paddingTop={50}
        paddingX={15}
      >
        <S.Avatar
          source={{
            uri: "https://github.com/LucasrsRodrigues.png"
          }}
        />

        <VStack>
          <Text
            color={theme.colors.grey_50}
            textTransform='uppercase'
          >
            Hello 👋
          </Text>
          <Text
            weight='semibold'
            variant='large'
            color={theme.colors.white}
          >
            Lucas R. Santos
          </Text>
        </VStack>
      </HStack>

      <Box
        backgroundColor={theme.colors.white}
        paddingX={15}
        paddingTop={30}
        marginTop={20}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        flex={1}
        paddingBottom={100}
      >
        {/* Message */}
        <VStack spacing={12}>
          <Heading weight='bold'>
            Let’s find the <Heading weight='bold' color={theme.colors.main}>Perfect Service</Heading> Expert
          </Heading>

          <HStack spacing={8}>
            <LocationIcon fill={theme.colors.black} />

            <Text weight='regular' color={theme.colors.grey_50}>
              Straford ParkLexington, KY 40505
            </Text>
          </HStack>
        </VStack>

        {/* Input */}
        <Box marginTop={30}>
          <Input
            placeholder='Search Service...'
            leftElement={<SearchIcon />}
            rightElement={<MicrophoneIcon fill={theme.colors.black} />}
          />
        </Box>

        <VStack>
          <HStack justifyContent="space-between" marginTop={30}>
            <Heading variant='heading4'>
              Services
            </Heading>

            <Button
              label='See all'
              type='outline'
              tintColor={theme.colors.main}
            />
          </HStack>

          <HStack spacing={24} marginTop={20}>
            {servicesOptions.map(service => (
              <ServiceItem
                label={service.label}
                icon={service.icon}
              />
            ))}
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

        <VStack>
          <HStack justifyContent="space-between" marginTop={30}>
            <Heading variant='heading4'>
              Most Popular Services
            </Heading>

            <Button
              label='See all'
              type='outline'
              tintColor={theme.colors.main}
            />
          </HStack>

          <HStack
            justifyContent="space-between"
            marginTop={20}
          >
            {servicesList.map(item => (
              <S.SelectButton
                key={item.id}
                onPress={() => setSelectedPopularService(item.label)}
              >
                <VStack spacing={3}>
                  <Text>{item.label}</Text>
                  {item.label === selectedPopularService && (
                    <S.ButtonDivider />
                  )}
                </VStack>
              </S.SelectButton>
            ))}

          </HStack>

          <HStack justifyContent="space-between" marginTop={40}>
            <ServiceCard />

            <ServiceCard />
          </HStack>
        </VStack>
      </Box>
    </S.Container>
  );
}