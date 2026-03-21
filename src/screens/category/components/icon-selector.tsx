import { FC } from 'react';
import { Pressable } from 'react-native';

import { AppColor } from 'common/enums';
import { IconName } from 'common/types';
import { Icon } from 'components';

type IconSelectorProps = {
  icon: IconName;
  isSelected: boolean;
  onSelect: (icon: IconName) => void;
};

const IconSelector: FC<IconSelectorProps> = ({
  icon,
  isSelected,
  onSelect,
}) => {
  return (
    <Pressable
      key={icon}
      onPress={() => onSelect(icon)}
      className={`h-16 w-16 items-center justify-center rounded-xl ${
        isSelected ? ' bg-primary500' : 'bg-white'
      }`}
    >
      <Icon
        name={icon}
        size={28}
        color={isSelected ? AppColor.NEUTRAL_ON : AppColor.NEUTRAL_700}
      />
    </Pressable>
  );
};

export { IconSelector };
