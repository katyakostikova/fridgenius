import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { Pressable, TextInputProps } from 'react-native';

import { AppColor, DateFormat } from 'common/enums';
import { cn } from 'helpers';

import { Icon } from './icon';
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
      <Pressable
        onPress={handleOpenPicker}
        className={cn(
          'flex-row items-center rounded-xl border border-neutral100/60 bg-neutralOn active:opacity-90',
          className,
        )}
      >
        <Input
          className="min-h-[52px] flex-1 border-0 bg-transparent py-4"
          value={value ?? ''}
          editable={false}
          pointerEvents="none"
          {...props}
        />
        <Icon
          name="calendar-month-outline"
          color={AppColor.NEUTRAL_600}
          size={22}
          className="pr-4"
        />
      </Pressable>
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
