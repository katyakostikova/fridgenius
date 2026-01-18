import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { AssistantScreen } from 'screens';

const Stack = createNativeStackNavigator();

function AssistantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.ASSISTANT_SCREEN}
        component={AssistantScreen}
      />
    </Stack.Navigator>
  );
}

export { AssistantStack };
