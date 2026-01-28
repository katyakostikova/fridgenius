import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { SettingsStackParamList } from 'common/types';
import { SettingsScreen } from 'screens';
import { I18nAppText } from 'services';

import { DEFAULT_STACK_SCREEN_OPTIONS } from './default-stack-screen-options';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={ScreenName.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{
          title: I18nAppText.t('settingsScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { SettingsStack };
