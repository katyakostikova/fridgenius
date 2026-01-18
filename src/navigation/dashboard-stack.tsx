import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { DashboardScreen } from 'screens';

const Stack = createNativeStackNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.DASHBOARD_SCREEN}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  );
}

export { DashboardStack };
