import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { Text } from 'components';
import { AssistantScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator();

function AssistantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => <Text variant="header">{children}</Text>,
      }}
    >
      <Stack.Screen
        name={ScreenName.ASSISTANT_SCREEN}
        component={AssistantScreen}
        options={{
          title: I18nAppText.t('assistantScreenName'),
        }}
      />
    </Stack.Navigator>
  );
}

export { AssistantStack };
