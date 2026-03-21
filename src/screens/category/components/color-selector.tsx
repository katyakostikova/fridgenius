import { FC } from 'react';
import { Pressable, View } from 'react-native';

type ColorSelectorProps = {
  colorOption: string;
  isSelected: boolean;
  onSelect: (colorOption: string) => void;
};

const ColorSelector: FC<ColorSelectorProps> = ({
  colorOption,
  isSelected,
  onSelect,
}) => {
  return (
    <Pressable
      key={colorOption}
      onPress={() => onSelect(colorOption)}
      className={`h-12 w-12 rounded-full items-center justify-center border-2`}
      style={{
        borderColor: colorOption,
      }}
    >
      <View
        className={`rounded-full ${isSelected ? 'h-9 w-9' : 'h-12 w-12'}`}
        style={{ backgroundColor: colorOption }}
      />
    </Pressable>
  );
};

export { ColorSelector };
