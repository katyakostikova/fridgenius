import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { FridgeScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator();

function FridgeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.FRIDGE_SCREEN}
        component={FridgeScreen}
        options={{
          title: I18nAppText.t('fridgeScreenName'),
        }}
      />
    </Stack.Navigator>
  );
}

export { FridgeStack };
