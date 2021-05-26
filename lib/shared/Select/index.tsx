import React, { FC, useEffect, useState, useRef } from 'react';
import { View, Text, Modal, Platform, Pressable, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { COLORS } from '../../constants/colors';
import { Label } from '../Label';
import { Space } from '../Space';
import { ArrowSVG, StopSVG } from '../svg';
import { getStyles } from './style';

type Option = {
  [key: string]: string,
};

interface Props {
  selectedValue?: string;
  name?: string;
  options: Array<Option>;
  optionsMaxHeight: number;
  optionValueKey: string;
  optionNameKey: string;
  optionKey: string;
  label?: string;
  placeholder: string;
  errorMessage?: string;
  size?: string;
  mode?: string;
  removable?: boolean;
  required?: boolean;
  enabled?: boolean;
  isFocused?: boolean;
  onChangeValue: (optionNameKey: any) => void;
  onFocus: () => void;
}

export const Select: FC<Props> = ({
  selectedValue = '',
  name,
  options = [],
  optionsMaxHeight = 200,
  optionValueKey = 'value',
  optionNameKey = 'name',
  optionKey = 'key',
  label = '',
  placeholder = 'placeholder',
  errorMessage = '',
  size = 'compact',
  mode = 'dropdown',
  removable = true,
  required = false,
  enabled = true,
  isFocused = false,
  onChangeValue = () => {},
  onFocus = () => {},
}) => {
  const [ isFocus, setIsFocus ] = useState(isFocused);
  const [ selectedOption, setSelectedOption ] = useState(() => options.find(i => i[optionKey] === selectedValue) ?? {});
  const { dp, fs, styles, width, height } = getStyles(isFocus, enabled);
  const element = useRef(null);
  const [ optionParams, setOptionParams ] = useState({
    top: 0,
    left: 0,
    width: 0,
    maxHeight: 0,
  });

  useEffect(() => {
    setIsFocus(isFocused);
  }, [isFocused]);

  useEffect(() => {
    handleClose();
  }, [width]);

  const handleOpen = () => {
    if (enabled) {
      setIsFocus(true);
      isFocus || onFocus();

      element.current.measure((
        x: number,
        y: number,
        w: number,
        h: number,
        oX: number,
        oY: number
      ) => {
        const optionsHeight = (dp * 28 + fs.small) * (options.length + 1) + dp * 10;
        const middleCalc = optionsHeight > optionsMaxHeight ? optionsMaxHeight : optionsHeight;
        const maxHeight = middleCalc > (height / 2) - h ? (height / 2) - h : middleCalc;

        (dp * 24 + fs.small) * options.length + 1;

        setOptionParams({
          top: h + oY + maxHeight > height ? oY - maxHeight : h + oY,
          left: oX,
          width: w,
          maxHeight,
        });
      });
    }
  };

  const handleClose = (option?: any) => {
    if (option) {
      onChangeValue(name ? {[name]: option[optionKey]} : option[optionKey]);
      setSelectedOption(option);
    }

    setIsFocus(false);
    setOptionParams({
      top: 0,
      left: 0,
      width: 0,
      maxHeight: 0,
    });
  };

  return (
    <>
      {
        label ? (
          <Space mb={8 * dp}>
            <Label
              title={label}
              color={COLORS.NEUTRAL_30}
              required={required}
              isAfter={true}
            />
          </Space>
        ) : null
      }

      <View style={styles.select_wrapper}>
        {
          !removable ? (
            <Space mr={12 * dp}>
              <StopSVG size={22 * dp} />
            </Space>
          ) : null
        }
        
        <TouchableOpacity
          ref={element}
          activeOpacity={1}
          style={[
            styles.select,
            styles[enabled ? errorMessage ? 'error' : 'default' : 'disabled'],
            styles[size],
          ]}
          onPress={handleOpen}
        >
          <Text numberOfLines={1} style={!selectedOption[optionNameKey] ? styles.placeholder : [styles.selected]}>
            {selectedOption[optionValueKey] ? selectedOption[optionValueKey] : placeholder}
          </Text>

          <View style={styles.arrow}>
            <ArrowSVG
              color={COLORS.NEUTRAL_40}
              size={14 * dp}
              direction={isFocus && enabled ? 'top' : 'bottom'}
            />
          </View>
        </TouchableOpacity>
      </View>

      {
        errorMessage && enabled ? (
          <Space mt={8 * dp}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </Space>
        ) : null
      }

      <Modal
        transparent={true}
        visible={enabled && isFocus}
      >
        <TouchableOpacity
          style={styles.modal}
          activeOpacity={1}
          onPress={() => handleClose()}
        >
          <View
            style={[
              styles.options,
              styles[Platform.OS],
              optionParams,
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={item => item[optionKey].toString()}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <Pressable
                  onPress={() => {
                    handleClose({
                      [optionKey]: '',
                      [optionNameKey]: '',
                      [optionValueKey]: '',
                    });
                  }}
                  style={[
                    styles.optionDefault,
                    !selectedOption[optionNameKey] ? styles.selectedOption : {}
                  ]}
                >
                  <Text style={styles.optionValue}>{placeholder}</Text>
                </Pressable>
              }
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleClose(item)}
                  style={[
                    styles.option,
                    item[optionNameKey] === selectedOption[optionNameKey] && styles.selectedOption,
                  ]}
                >
                  <Text style={styles.optionValue}>{item[optionValueKey]}</Text>
                </Pressable>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

