import { ComponentProps, FC, useEffect, useRef, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  View,
  type LayoutRectangle,
  ViewProps,
} from 'react-native';
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { AppColor } from 'common/enums';
import { SelectorOption } from 'common/types';
import { cn } from 'helpers';

import { Divider } from './divider';
import { Icon } from './icon';
import { Input } from './input';
import { Text } from './text';

const DROPDOWN_TOP_GAP = 6;
const DROPDOWN_MAX_HEIGHT = 240;

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
  // todo
  const [dropdownLayout, setDropdownLayout] = useState<LayoutRectangle | null>(
    null,
  );
  const triggerRef = useRef<View>(null);
  const rotationDeg = useSharedValue(0);

  const valueTitle = options.find((opt) => opt.key === value)?.name ?? '';

  useEffect(() => {
    rotationDeg.value = withTiming(areOptionsShown ? 180 : 0, {
      duration: 250,
    });
  }, [areOptionsShown, rotationDeg]);

  const chevronStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationDeg.value}deg` }],
  }));

  const openOptions = () => {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
      setDropdownLayout({ x, y, width, height });
      setAreOptionsShown(true);
    });
  };

  const closeOptions = () => {
    setAreOptionsShown(false);
  };

  const handleToggleOptions = () => {
    if (areOptionsShown) {
      closeOptions();
    } else {
      openOptions();
    }
  };

  const handleSelect = (option: number | string) => {
    onSelect(option);
    closeOptions();
  };

  return (
    <View
      ref={triggerRef}
      collapsable={false}
      className={cn('relative', className)}
      {...props}
    >
      <Pressable onPress={handleToggleOptions}>
        <View className="relative">
          <Input
            value={valueTitle}
            editable={false}
            pointerEvents="none"
            {...inputProps}
          />
          <Animated.View
            pointerEvents="none"
            style={[
              chevronStyle,
              {
                position: 'absolute',
                right: 15,
                top: 0,
                bottom: 0,
                justifyContent: 'center',
              },
            ]}
          >
            <Icon name="chevron-down" size={22} color={AppColor.NEUTRAL_500} />
          </Animated.View>
        </View>
      </Pressable>

      <Modal
        visible={areOptionsShown}
        transparent
        animationType="none"
        onRequestClose={closeOptions}
      >
        <View className="flex-1">
          <Pressable
            className="absolute inset-0 bg-transparent"
            onPress={closeOptions}
          />
          {dropdownLayout ? (
            <Animated.View
              entering={FadeInUp.duration(200)}
              className="absolute overflow-hidden rounded-xl border border-neutral100/60 bg-neutralOn shadow-md shadow-primary500/15"
              style={{
                top:
                  dropdownLayout.y + dropdownLayout.height + DROPDOWN_TOP_GAP,
                left: dropdownLayout.x,
                width: dropdownLayout.width,
                maxHeight: DROPDOWN_MAX_HEIGHT,
              }}
            >
              <ScrollView
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled
                showsVerticalScrollIndicator
                bounces={false}
              >
                {options.map((item, index) => (
                  <>
                    <Pressable
                      onPress={() => handleSelect(item.key)}
                      className="active:bg-neutral50 px-3 py-3.5"
                    >
                      <Text
                        variants={{
                          color: 'neutral800',
                          weight: 'medium',
                        }}
                      >
                        {item.name}
                      </Text>
                    </Pressable>
                    {index !== options.length - 1 ? (
                      <Divider className="mx-3 h-px bg-neutral100/80" />
                    ) : null}
                  </>
                ))}
              </ScrollView>
            </Animated.View>
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

export { Selector };
