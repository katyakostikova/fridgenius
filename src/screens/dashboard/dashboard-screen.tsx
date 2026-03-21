import { FC } from 'react';
import { Text } from 'react-native';

import { DashboardScreenProps } from 'common/types';
import { ScreenWrapper } from 'components';

const DashboardScreen: FC<DashboardScreenProps> = () => {
  return (
    <ScreenWrapper>
      <Text>Dashboard Screen</Text>
    </ScreenWrapper>
  );
};

export { DashboardScreen };
