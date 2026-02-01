import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Input } from './input';

type InputProps = {
  onChangeDate: (value: string) => void;
} & TextInputProps;

const DatePickerInput: FC<InputProps> = ({
  onChangeDate,
  value,
  className,
  ...props
}) => {
  const [isPickerShown, setIsPickerShown] = useState(false);

  const handleChangeDate = (e: DateTimePickerEvent) => {
    onChangeDate(dayjs(e.nativeEvent.timestamp).format('DD/MM/YYYY'));
  };

  const handleOpenPicker = () => {
    setIsPickerShown(true);
  };

  return (
    <>
      <Input
        value={value}
        editable={false}
        onPress={handleOpenPicker}
        {...props}
      />
      {isPickerShown && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dayjs(value).toDate()}
          mode="date"
          onChange={handleChangeDate}
        />
      )}
    </>
  );
};

export { DatePickerInput };
