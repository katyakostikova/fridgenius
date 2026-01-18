import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { DashboardScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          title: I18nAppText.t('dashboardScreenName'),
        }}
      />
    </Stack.Navigator>
  );
}

export { DashboardStack };
