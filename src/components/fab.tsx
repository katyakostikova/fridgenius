import { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';

import { AppColor } from 'common/enums';

import { Icon } from './icon';

type FabProps = {
  onPress: () => void;
} & PressableProps;

const Fab: FC<FabProps> = ({ onPress, className, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      className={`items-center justify-center bg-secondary500 p-4 rounded-full shadow-md active:bg-secondary600 ${className ?? ''}`}
      {...props}
    >
      <Icon name="plus" color={AppColor.NEUTRAL_100} size={30} />
    </Pressable>
  );
};

export { Fab };
