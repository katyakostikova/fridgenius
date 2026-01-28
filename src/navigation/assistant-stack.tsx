import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { AssistantStackParamList } from 'common/types';
import { AssistantScreen } from 'screens';
import { I18nAppText } from 'services';

import { DEFAULT_STACK_SCREEN_OPTIONS } from './default-stack-screen-options';

const Stack = createNativeStackNavigator<AssistantStackParamList>();

const AssistantStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={ScreenName.ASSISTANT_SCREEN}
        component={AssistantScreen}
        options={{
          title: I18nAppText.t('assistantScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { AssistantStack };
