import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { SettingsScreen } from 'screens';

const Stack = createNativeStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.SETTINGS_STACK}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}

export { SettingsStack };
