import { ComponentProps, FC } from 'react';
import { View } from 'react-native';

import { Icon, Text } from 'components';
import { I18nAppText } from 'services';

type BottomTabItemProps = {
  focused: boolean;
  color: string;
  size: number;
  iconName: ComponentProps<typeof Icon>['name'];
  labelKey:
    | 'bottomTabDashboard'
    | 'bottomTabFridge'
    | 'bottomTabAssistant'
    | 'bottomTabSettings';
};

const BottomTabItem: FC<BottomTabItemProps> = ({
  focused,
  color,
  size,
  iconName,
  labelKey,
}) => {
  return (
    <View className="min-h-[52px] flex-1 items-center justify-center">
      <View
        className={`items-center rounded-2xl px-3 py-1.5 ${
          focused ? 'bg-neutral50' : 'bg-transparent'
        }`}
      >
        <Icon name={iconName} color={color} size={size} />
        <Text
          className="mt-1 text-center text-[10px] font-nunito-semi-bold uppercase"
          style={{ color }}
        >
          {I18nAppText.t(labelKey)}
        </Text>
      </View>
    </View>
  );
};

export { BottomTabItem };
