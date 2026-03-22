import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ComponentProps, FC } from 'react';

import { AppColor } from 'common/enums';

type IconProps = ComponentProps<typeof MaterialCommunityIcons> & {
  className?: string;
};

const Icon: FC<IconProps> = ({
  color = AppColor.NEUTRAL_800,
  size = 20,
  className,
  ...props
}) => {
  return (
    <MaterialCommunityIcons
      color={color}
      size={size}
      className={className}
      {...props}
    />
  );
};

export { Icon };
