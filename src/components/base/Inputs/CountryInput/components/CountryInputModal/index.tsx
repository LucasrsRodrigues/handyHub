import React, { useRef } from 'react';

import { FlatList, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';
import { Text } from '@components/base/Typography/Text';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { ICountry } from '@global/@types';

interface ICountryInputModalProps extends ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (country: ICountry) => void;
  data: Array<ICountry>;
}

export function CountryInputModal({ isVisible, onClose, onSubmit, data, ...rest }: ICountryInputModalProps) {
  const modalRef = useRef<Modal>(null);
  const theme = useTheme();

  return (
    <Modal
      ref={modalRef}
      animationType="slide"
      transparent={true}
      visible={isVisible}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <S.ModalContent>
          <S.ModalWrapperFlatList>
            <FlatList
              data={data}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <S.CountryItem
                  onPress={() => onSubmit(item)}
                >
                  <S.CountryItemFlag
                    source={{
                      uri: item.flags.png,
                    }}
                  />
                  <Text color={theme.colors.white}>
                    {item.name}
                  </Text>
                </S.CountryItem>
              )}
            />
          </S.ModalWrapperFlatList>
        </S.ModalContent>
      </TouchableWithoutFeedback>
    </Modal>
  );
}