import { BlurView } from 'expo-blur';
import { ComponentProps, FC, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

import { AppColor } from 'common/enums';
import { IconName } from 'common/types';

import { Fab } from './fab';
import { Icon } from './icon';
import { Text } from './text';

type Option = {
  name: string;
  iconName: IconName;
  onPress: () => void;
};

type FabWithOptionsProps = {
  options: Option[];
} & Omit<ComponentProps<typeof Fab>, 'onPress'>;

const FabWithOptions: FC<FabWithOptionsProps> = ({
  options,
  className,
  ...props
}) => {
  const [areOptionsShown, setAreOptionsShown] = useState(false);

  const handleToggleOptions = () => {
    setAreOptionsShown((prev) => !prev);
  };

  const handleOptionPress = (onPress: () => void) => {
    setAreOptionsShown(false);
    onPress();
  };

  return (
    <>
      {areOptionsShown && (
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          className="absolute inset-0 z-10"
        >
          <BlurView
            intensity={10}
            tint="extraLight"
            style={StyleSheet.absoluteFillObject}
          />
          <Pressable
            className="absolute inset-0 bg-neutral900/15"
            onPress={handleToggleOptions}
          />
        </Animated.View>
      )}
      <View className={`z-20 items-end ${className ?? ''}`}>
        {areOptionsShown && (
          <Animated.View
            entering={FadeInDown.duration(300)}
            className="mb-3 items-end"
          >
            {options.map((item) => (
              <Pressable
                key={item.name}
                onPress={() => handleOptionPress(item.onPress)}
                className="mb-3 flex-row items-center active:opacity-90"
              >
                <View className="mr-3 rounded-[15px] bg-neutralOn px-4 py-2.5 shadow-md">
                  <Text
                    variants={{
                      color: 'neutral800',
                      size: 'lg',
                      weight: 'semiBold',
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <View className="h-14 w-14 items-center justify-center rounded-[15px] bg-neutralOn shadow-md">
                  <Icon
                    name={item.iconName}
                    size={30}
                    color={AppColor.PRIMARY_500}
                  />
                </View>
              </Pressable>
            ))}
          </Animated.View>
        )}
        <Fab
          isOpen={areOptionsShown}
          onPress={handleToggleOptions}
          {...props}
        />
      </View>
    </>
  );
};

export { FabWithOptions };
