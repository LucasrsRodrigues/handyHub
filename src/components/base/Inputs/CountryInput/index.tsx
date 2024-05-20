import React, { useState } from 'react';

import * as S from './styles';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { VStack } from '@components/base/VStack';
import { Text } from '@components/base/Typography/Text';
import { countriesData } from '@backend/data';
import { ICountry } from '@global/@types';
import { CountryInputModal } from './components/CountryInputModal';

interface IInputProps extends TextInputProps {
  label: string;
}

export function CountryInput({ label, ...rest }: IInputProps) {
  const theme = useTheme();

  const [countries, setCountries] = useState<Array<ICountry>>(countriesData);
  const [selectedCountry, setSelectedCountry] = useState<ICountry>(countriesData[31]);
  const [showCountryModal, setShowCountryModal] = useState(false);

  function handleCloseModal() {
    setShowCountryModal(false);
  }

  function handleSubmitModal(country: ICountry) {
    setShowCountryModal(false);
    setSelectedCountry(country);
  }

  return (
    <VStack spacing={10}>
      <Text>
        {label}
      </Text>

      <S.WrapperInputIcon>
        <S.CountryButton onPress={() => setShowCountryModal(true)}>
          <S.CountryFlag
            source={{
              uri: selectedCountry?.flags?.png
            }}
          />

          <Text weight='regular' variant='small' color={theme.colors.grey_50}>
            + {selectedCountry?.callingCodes[0]}
          </Text>

          <S.Pipe />

        </S.CountryButton>

        <S.Input
          placeholder="Phone number"
          {...rest}
        />
      </S.WrapperInputIcon>

      <CountryInputModal
        data={countries}
        isVisible={showCountryModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
    </VStack>
  );
}