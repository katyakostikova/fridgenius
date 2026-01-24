import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppColor, ScreenName } from 'common/enums';
import { FridgeStackParamList } from 'common/types';
import { Text } from 'components';
import { CategoryScreen, FridgeScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator<FridgeStackParamList>();

const FridgeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => (
          <Text variants={{ type: 'header', color: 'neutral50' }}>
            {children}
          </Text>
        ),
        headerStyle: {
          backgroundColor: AppColor.PRIMARY_500,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
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
    </Stack.Navigator>
  );
};

export { FridgeStack };
