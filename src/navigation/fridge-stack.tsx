import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { FridgeStackParamList } from 'common/types';
import { Text } from 'components';
import { FridgeScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator<FridgeStackParamList>();

const FridgeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => (
          <Text variants={{ type: 'header' }}>{children}</Text>
        ),
      }}
    >
      <Stack.Screen
        name={ScreenName.FRIDGE_SCREEN}
        component={FridgeScreen}
        options={{
          title: I18nAppText.t('fridgeScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { FridgeStack };
