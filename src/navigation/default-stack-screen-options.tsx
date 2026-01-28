import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { AppColor } from 'common/enums';
import { Text } from 'components';

const DEFAULT_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerTitle: ({ children }: { children: string }) => (
    <Text variants={{ type: 'header', color: 'neutral50' }}>{children}</Text>
  ),
  headerStyle: {
    backgroundColor: AppColor.PRIMARY_500,
  },
  headerBackButtonDisplayMode: 'minimal',
};

export { DEFAULT_STACK_SCREEN_OPTIONS };
