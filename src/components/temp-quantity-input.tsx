import { FC, useState } from 'react';
import { Pressable, View } from 'react-native';

import { cn } from 'helpers';

import { Input } from './input';
import { Text } from './text';

type TempQuantityInputProps = {
  currentQuantity: number;
  onResultingQuantityChange: (quantity: number) => void;
  className?: string;
};

const NEGATIVE_NUMBER_OPTIONS = [-10, -5, -1];
const POSITIVE_NUMBER_OPTIONS = [1, 5, 10];

const MAX_ITEM_QUANTITY = 9999;

const getSafeItemQuantity = (n: number): number =>
  Math.min(MAX_ITEM_QUANTITY, Math.max(0, n));

const parseNumberInput = (text: string): number | null => {
  const trimmed = text.trim();
  const parsedNumber = Math.round(Number(trimmed));

  if (!Number.isFinite(parsedNumber)) {
    return null;
  }

  return parsedNumber;
};

const TempQuantityInput: FC<TempQuantityInputProps> = ({
  currentQuantity,
  onResultingQuantityChange,
  className,
}) => {
  const [resultingQuantity, setResultingQuantity] = useState(currentQuantity);

  const diffQuantity = resultingQuantity - currentQuantity;

  const [changeText, setChangeText] = useState('0');
  const [isChangeInputFocused, setIsChangeInputFocused] = useState(false);

  const changeInputValue = isChangeInputFocused
    ? changeText
    : String(diffQuantity);

  const handleChangeInputFocus = () => {
    setIsChangeInputFocused(true);
  };

  const handleChangeInputBlur = () => {
    setIsChangeInputFocused(false);
    const parsed = parseNumberInput(changeText);

    if (parsed === null) {
      setChangeText('0');
      return;
    }

    handleSubmitResultingQuantity(currentQuantity + parsed);
  };

  const handleSubmitResultingQuantity = (next: number) => {
    const safeQuantity = getSafeItemQuantity(next);

    setResultingQuantity(safeQuantity);
    onResultingQuantityChange(safeQuantity);
  };

  const handleResultingQuantityChange = (text: string) => {
    const parsed = parseNumberInput(text);
    if (parsed === null) {
      return;
    }

    setResultingQuantity(parsed);
  };

  const handleResultingQuantityBlur = () => {
    const parsed = parseNumberInput(String(resultingQuantity));
    if (parsed === null) {
      setResultingQuantity(resultingQuantity);
      return;
    }
    handleSubmitResultingQuantity(parsed);
  };

  const renderNumberOption = (option: number, isPositive: boolean) => {
    return (
      <Pressable
        key={option}
        className={cn(
          `min-w-[40px] flex-1 justify-center  border-neutral100/80 active:bg-neutral200/40`,
          isPositive ? 'border-l' : 'border-r',
        )}
        onPress={() =>
          handleSubmitResultingQuantity(resultingQuantity + option)
        }
      >
        <Text
          className="text-center"
          variants={{ size: 'sm', color: isPositive ? 'success' : 'error' }}
        >
          {isPositive ? `+${option}` : option}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className={cn('gap-4', className)}>
      <View className="flex-row items-center">
        <Text variants={{ weight: 'semiBold' }}>Current Quantity:</Text>
        <Text className="ml-5">{currentQuantity}</Text>
      </View>

      <View className="overflow-hidden rounded-md border border-neutral100/80 bg-neutral50">
        <View className="flex-row">
          {NEGATIVE_NUMBER_OPTIONS.map((option) =>
            renderNumberOption(option, false),
          )}
          <View className="min-w-[40px] justify-center">
            <Input
              className="text-center border-transparent rounded-none"
              keyboardType="numbers-and-punctuation"
              selectTextOnFocus
              value={changeInputValue}
              onChangeText={setChangeText}
              onFocus={handleChangeInputFocus}
              onBlur={handleChangeInputBlur}
              maxLength={String(MAX_ITEM_QUANTITY).length}
            />
          </View>
          {POSITIVE_NUMBER_OPTIONS.map((option) =>
            renderNumberOption(option, true),
          )}
        </View>
      </View>

      <View className="flex-row items-center">
        <Text variants={{ weight: 'semiBold' }}>Resulting Quantity:</Text>
        <Input
          className="ml-5 px-5"
          maxLength={String(MAX_ITEM_QUANTITY).length}
          keyboardType="decimal-pad"
          selectTextOnFocus
          value={String(resultingQuantity)}
          onChangeText={handleResultingQuantityChange}
          onBlur={handleResultingQuantityBlur}
        />
      </View>
    </View>
  );
};

export { TempQuantityInput };
