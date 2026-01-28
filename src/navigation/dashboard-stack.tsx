import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { DashboardStackParamList } from 'common/types';
import { DashboardScreen } from 'screens';
import { I18nAppText } from 'services';

import { DEFAULT_STACK_SCREEN_OPTIONS } from './default-stack-screen-options';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={ScreenName.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          title: I18nAppText.t('dashboardScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { DashboardStack };
