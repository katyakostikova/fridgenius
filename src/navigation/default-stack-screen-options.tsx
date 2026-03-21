import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { AppColor } from 'common/enums';
import { Text } from 'components';

const DEFAULT_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerTitle: ({ children }: { children: string }) => (
    <Text variants={{ type: 'header', color: 'neutral800' }}>{children}</Text>
  ),
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: AppColor.PRIMARY_25,
  },
  headerBackButtonDisplayMode: 'minimal',
  headerTitleAlign: 'left',
};

export { DEFAULT_STACK_SCREEN_OPTIONS };
