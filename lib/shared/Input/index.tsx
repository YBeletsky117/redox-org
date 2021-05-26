import React, { FC, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardTypeOptions, ReturnKeyType } from 'react-native';
import { TextInputMask } from "react-native-masked-text";

import { COLORS } from '../../constants/colors';
import { Label } from '../Label';
import { Space } from '../Space';
import { StopSVG, EyeOnSVG, EyeOffSVG } from '../svg';
import { getStyles } from './style';

interface Props {
  value?: string;
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  size?: string;
  name?: string;
  mask?: string;
  maxLength?: number;
  autoCapitalize?: string;
  autoCorrect?: boolean;
  autoCompleteType?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyType;
  secureText?: boolean;
  removable?: boolean;
  required?: boolean;
  editable?: boolean;
  isFocused?: boolean;
  multiline?: boolean;
  onChangeText?: (value: {[key: string]: string} | string) => void;
  onEndEditing?: (value: {[key: string]: string} | string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const Input: FC<Props> = ({
  value = '',
  defaultValue,
  label = '',
  placeholder = '',
  errorMessage = '',
  size = 'compact',
  name,
  mask,
  maxLength,
  autoCapitalize,
  autoCorrect = false,
  autoCompleteType = 'off',
  keyboardType,
  returnKeyType,
  secureText = false,
  removable = true,
  required = false,
  editable = true,
  isFocused = false,
  multiline = false,
  onChangeText = () => {},
  onEndEditing = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [ isFocus, setIsFocus ] = useState(isFocused);
  const { dp, styles } = getStyles(isFocus);
  const [ isHidePass, setIsHidePass ] = useState(true);

  useEffect(() => {
    setIsFocus(isFocused);
  }, [isFocused]);

  const args: any = {
    defaultValue,
    placeholder,
    keyboardType,
    returnKeyType,
    secureTextEntry: isHidePass && secureText,
    maxLength,
    autoCapitalize,
    autoCorrect,
    autoCompleteType,
    editable,
    isFocused: isFocus,
    placeholderTextColor: editable ? COLORS.NEUTRAL_30 : COLORS.NEUTRAL_40,
    style: [
      styles.input,
      styles[editable ? errorMessage ? 'error' : 'default' : 'disabled'],
      styles[multiline ? 'multiline' : size],
      {paddingRight: secureText ? dp * 38 : dp * 12}
    ],
    onChangeText(text) {
      name ? onChangeText({ [name]: text }) : onChangeText(text);
    },
    onEndEditing(e) {
      name ? onEndEditing({ [name]: e.nativeEvent.text }) : onEndEditing(e.nativeEvent.text);
      setIsFocus(false);
    },
    onFocus() {
      onFocus();
      setIsFocus(true);
    },
    onBlur() {
      onBlur();
      setIsFocus(false);
    },
  };

  value && (args.value = value);

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

      <View style={styles.input_wrapper}>
        {
          !removable ? (
            <Space mr={12 * dp}>
              <StopSVG size={22 * dp} />
            </Space>
          ) : null
        }

        {
          mask ? (
            <TextInputMask
              type="custom"
              options={{ mask }}
              {...args}
            />
          ) : (
            <TextInput
              multiline={multiline}
              {...args}
            />
          )
        }

        {
          secureText ? (
            <TouchableOpacity
              style={styles.hidePass}
              activeOpacity={1}
              onPress={() => setIsHidePass(state => !state)}
            >
              {
                isHidePass ? (
                  <EyeOffSVG color={COLORS.NEUTRAL_40} size={dp * 22} />
                ) : (
                  <EyeOnSVG color={COLORS.NEUTRAL_40} size={dp * 22} />
                )
              }
            </TouchableOpacity>
          ) : null
        }
      </View>

      {
        errorMessage && editable ? (
          <Space mt={8 * dp}>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </Space>
        ) : null
      }
    </>
  );
};

