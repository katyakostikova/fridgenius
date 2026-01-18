import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { FridgeScreen } from 'screens';

const Stack = createNativeStackNavigator();

function FridgeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.FRIDGE_SCREEN} component={FridgeScreen} />
    </Stack.Navigator>
  );
}

export { FridgeStack };
