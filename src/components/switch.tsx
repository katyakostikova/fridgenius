import { FC } from 'react';
import { Switch as RNSwitch, SwitchProps } from 'react-native';

import { AppColor } from 'common/enums';

const defaultTrackColor: SwitchProps['trackColor'] = {
  false: AppColor.NEUTRAL_50,
  true: AppColor.PRIMARY_500,
};

const Switch: FC<SwitchProps> = ({
  accessibilityRole = 'switch',
  accessibilityState,
  ios_backgroundColor = AppColor.NEUTRAL_50,
  thumbColor = AppColor.NEUTRAL_ON,
  trackColor = defaultTrackColor,
  value,
  ...props
}) => {
  const checked = !!value;

  return (
    <RNSwitch
      accessibilityRole={accessibilityRole}
      accessibilityState={{ ...accessibilityState, checked }}
      ios_backgroundColor={ios_backgroundColor}
      thumbColor={thumbColor}
      trackColor={trackColor}
      value={value}
      {...props}
    />
  );
};

export { Switch };
