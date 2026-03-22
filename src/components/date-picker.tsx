import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { Platform, Pressable, TextInputProps, View } from 'react-native';

import { AppColor, DateFormat } from 'common/enums';
import { cn } from 'helpers';

import { Button } from './button';
import { Icon } from './icon';
import { Input } from './input';
import { Modal } from './modal';

type InputProps = {
  value: string | null | undefined;
  onChangeDate: (value: string) => void;
} & Omit<TextInputProps, 'value'>;

const parseStoredDate = (stored: string | null | undefined): Date => {
  const parsed = dayjs(stored, DateFormat.DATE_ONLY, true);

  return parsed.isValid() ? parsed.toDate() : new Date();
};

const DatePickerInput: FC<InputProps> = ({
  onChangeDate,
  value,
  className,
  ...props
}) => {
  const [isPickerShown, setIsPickerShown] = useState(false);
  const [draftDate, setDraftDate] = useState(() => new Date());

  const handleOpenPicker = () => {
    setDraftDate(parseStoredDate(value));
    setIsPickerShown(true);
  };

  const handleCancel = () => {
    setIsPickerShown(false);
  };

  const handleConfirm = () => {
    onChangeDate(dayjs(draftDate).format(DateFormat.DATE_ONLY));
    setIsPickerShown(false);
  };

  const handleChangeDate = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === 'dismissed') {
      handleCancel();
      return;
    }

    if (date) {
      setDraftDate(date);
    }
  };

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
      <Modal
        visible={isPickerShown}
        onClose={handleCancel}
        backdropAccessibilityLabel="Close date picker"
      >
        <View className="w-full max-w-[360px] rounded-[36px] bg-neutralOn">
          <View className="p-3">
            <DateTimePicker
              testID="dateTimePicker"
              value={draftDate}
              mode="date"
              display={Platform.select({
                ios: 'inline',
                android: 'calendar',
                default: 'inline',
              })}
              onChange={handleChangeDate}
              themeVariant="light"
              accentColor={AppColor.PRIMARY_500}
              textColor={AppColor.NEUTRAL_800}
            />
          </View>
          <View className="flex-row border-t border-neutral50">
            <Button
              title="Cancel"
              variant="ghost"
              color="neutral"
              onPress={handleCancel}
              className="flex-1 py-4"
            />
            <View className="w-px bg-neutral50" />
            <Button
              title="Confirm"
              variant="ghost"
              color="primary"
              onPress={handleConfirm}
              className="flex-1 py-4"
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export { DatePickerInput };
