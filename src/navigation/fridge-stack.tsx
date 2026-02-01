import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';
import { FridgeStackParamList } from 'common/types';
import { CategoryScreen, FridgeScreen, ItemScreen } from 'screens';
import { I18nAppText } from 'services';

import { DEFAULT_STACK_SCREEN_OPTIONS } from './default-stack-screen-options';

const Stack = createNativeStackNavigator<FridgeStackParamList>();

const FridgeStack = () => {
  return (
    <Stack.Navigator screenOptions={DEFAULT_STACK_SCREEN_OPTIONS}>
      <Stack.Screen
        name={ScreenName.FRIDGE_SCREEN}
        component={FridgeScreen}
        options={{
          title: I18nAppText.t('fridgeScreenName'),
        }}
      />
      <Stack.Screen
        name={ScreenName.CATEGORY_SCREEN}
        component={CategoryScreen}
      />
      <Stack.Screen name={ScreenName.ITEM_SCREEN} component={ItemScreen} />
    </Stack.Navigator>
  );
};

export { FridgeStack };
