import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppColor, ScreenName } from 'common/enums';
import { DashboardStackParamList } from 'common/types';
import { Text } from 'components';
import { DashboardScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator<DashboardStackParamList>();

const DashboardStack = () => {
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
      }}
    >
      <Stack.Screen
        name={ScreenName.DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          title: I18nAppText.t('dashboardScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { DashboardStack };
