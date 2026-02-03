import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { TextInputProps } from 'react-native';

import { DateFormat } from 'common/enums';

import { Input } from './input';

type InputProps = {
  value: string | null | undefined;
  onChangeDate: (value: string) => void;
} & Omit<TextInputProps, 'value'>;

const DatePickerInput: FC<InputProps> = ({
  onChangeDate,
  value,
  className,
  ...props
}) => {
  const [isPickerShown, setIsPickerShown] = useState(false);

  const handleOpenPicker = () => {
    setIsPickerShown(true);
  };

  const handleClosePicker = () => {
    setIsPickerShown(false);
  };

  const handleChangeDate = (e: DateTimePickerEvent) => {
    onChangeDate(dayjs(e.nativeEvent.timestamp).format(DateFormat.DATE_ONLY));
    handleClosePicker();
  };

  // TODO: show picker modal
  // TODO: fix app crash
  return (
    <>
      <Input
        value={value ?? undefined}
        editable={false}
        onPress={handleOpenPicker}
        {...props}
      />
      {isPickerShown && (
        <DateTimePicker
          testID="dateTimePicker"
          value={
            value
              ? new Date(dayjs(value, DateFormat.DATE_ONLY).toISOString())
              : new Date()
          }
          mode="date"
          onChange={handleChangeDate}
          display="inline"
        />
      )}
    </>
  );
};

export { DatePickerInput };
