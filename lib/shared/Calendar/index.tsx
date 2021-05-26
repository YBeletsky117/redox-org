import React, { FC, useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Platform } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { Button } from '../Button';
import { Space } from '../Space';
import { ArrowSVG } from '../svg';
import { COLORS } from '../../constants/colors';

import { getStyles } from './style';

interface Props {
  devfaultValue?: any;
  placeholder?: string;
  name?: string;
  rangeDate?: boolean;
  dayColor?: any;
  disabled?: boolean;
  maxDate?: any;
  enabled?: boolean;
  size?: string;
  onChangeValue?: (value: any) => void;
}

const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const Calendar: FC<Props> = ({
  devfaultValue = moment(),
  placeholder,
  name,
  rangeDate = false,
  dayColor,
  disabled,
  maxDate,
  enabled = true,
  size = 'compact',
  onChangeValue = () => {},
}) => {
  moment.locale('ru');
  const [ isFocus, setIsFocus ] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState(moment());
  const [ value, setValue ] = useState(devfaultValue);
  const { styles, width, dp } = getStyles(isFocus);

  const handleAccept = () => {
    if (selectedDate) {
      setValue(selectedDate);
      onChangeValue(name ? {[name]: selectedDate} : selectedDate);
    }

    handleClose();
  };

  const selectedDates = (date, type) => {
    setSelectedDate(date);
  };

  const handleClose = () => {
    setIsFocus(false);
    setSelectedDate(null);
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.date,
          styles[enabled ? 'default' : 'disabled'],
          styles[size],
        ]}
        activeOpacity={1}
        onPress={() => setIsFocus(true)}
      >
        <Text numberOfLines={1} style={styles.dateText}>
          {moment(value).format('LL') ?? placeholder}
        </Text>

        <View style={styles.arrow}>
          <ArrowSVG
            color={COLORS.NEUTRAL_40}
            size={14 * dp}
            direction={isFocus && enabled ? 'top' : 'bottom'}
          />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent
        visible={isFocus}
      >
        <View style={styles.container}>
          <View style={styles.calendar}>
            {
              Platform.OS === 'web' ? (
                <Space h={300} /> // Заглужка для браузера
              ) : (
                <CalendarPicker
                  firstDay={1}
                  onDateChange={(date, type) => selectedDates(date, type)}
                  weekdays={weekdays}
                  months={months}
                  previousTitle={'<'}
                  previousTitleStyle={styles.calendarText}
                  nextTitleStyle={styles.calendarText}
                  nextTitle={'>'}
                  textStyle={styles.text}
                  selectedDayColor={dayColor || COLORS.PRIMARY_50P}
                  selectedRangeStartStyle={styles.targetDays}
                  selectedRangeEndStyle={styles.targetDays}
                  allowRangeSelection={rangeDate}
                  scaleFactor={width + 30}
                  selectMonthTitle="Выберите месяц в "
                  selectYearTitle="Выберите год"
                  maxDate={maxDate}
                />
              )
            }

            <View style={{ flexDirection: 'row', paddingVertical: 17 }}>
              <Space mr={12}>
                <Button
                  label="Отмена"
                  type={disabled ? 'disabled' : 'outline'}
                  size="small"
                  onPress={handleClose}
                />
              </Space>

              <Button
                label="Применить"
                type={disabled ? 'disabled' : 'primary'}
                size="small"
                onPress={handleAccept}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};