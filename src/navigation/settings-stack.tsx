import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { Text } from 'components';
import { SettingsScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator();

function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => (
          <Text variants={{ type: 'header' }}>{children}</Text>
        ),
      }}
    >
      <Stack.Screen
        name={ScreenName.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          title: I18nAppText.t('settingsScreenName'),
        }}
      />
    </Stack.Navigator>
  );
}

export { SettingsStack };
