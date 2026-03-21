import { FC } from 'react';
import { Text } from 'react-native';

import { SettingsScreenProps } from 'common/types';
import { ScreenWrapper } from 'components';

const SettingsScreen: FC<SettingsScreenProps> = () => {
  return (
    <ScreenWrapper>
      <Text>Settings Screen</Text>
    </ScreenWrapper>
  );
};

export { SettingsScreen };
