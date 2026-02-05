import { ComponentProps, FC, Fragment, useState } from 'react';
import { Pressable, View, ViewProps } from 'react-native';

import { SelectorOption } from 'common/types';

import { Divider } from './divider';
import { Input } from './input';
import { Text } from './text';

type SelectorProps = {
  options: SelectorOption[];
  value: number | string | undefined | null;
  onSelect: (option: number | string) => void;
  inputProps?: ComponentProps<typeof Input>;
} & ViewProps;

const Selector: FC<SelectorProps> = ({
  options,
  value,
  className,
  inputProps,
  onSelect,
  ...props
}) => {
  const [areOptionsShown, setAreOptionsShown] = useState(false);

  const valueTitle = options.find((opt) => opt.key === value)?.name ?? '';

  const handleToggleOptions = () => {
    setAreOptionsShown((prev) => !prev);
  };

  const handleSelect = (option: number | string) => {
    onSelect(option);
    handleToggleOptions();
  };

  return (
    <View className={className} {...props}>
      <Input
        value={valueTitle}
        editable={false}
        onPress={handleToggleOptions}
        {...inputProps}
      />
      {areOptionsShown && (
        <View className="p-4 border-x border-b rounded-b-sm border-neutral300 bg-neutral50 ">
          {options.map((item, index) => (
            <Fragment key={item.key}>
              <Pressable
                key={item.name}
                onPress={() => handleSelect(item.key)}
                className="active:opacity-70 px-1"
              >
                <Text
                  variants={{
                    color: 'neutral600',
                    weight: 'medium',
                  }}
                >
                  {item.name}
                </Text>
              </Pressable>
              {index !== options.length - 1 && (
                <Divider className="bg-neutral600 my-3 h-[1px]" />
              )}
            </Fragment>
          ))}
        </View>
      )}
    </View>
  );
};

export { Selector };
