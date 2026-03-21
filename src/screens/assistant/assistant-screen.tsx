import { FC } from 'react';
import { Text } from 'react-native';

import { AssistantScreenProps } from 'common/types';
import { ScreenWrapper } from 'components';

const AssistantScreen: FC<AssistantScreenProps> = () => {
  return (
    <ScreenWrapper>
      <Text>Assistant Screen</Text>
    </ScreenWrapper>
  );
};

export { AssistantScreen };
