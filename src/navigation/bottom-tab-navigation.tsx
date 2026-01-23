import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScreenName } from 'common/enums';
import { BottomTabParamList } from 'common/types';
import { Icon } from 'components';

import { AssistantStack } from './assistant-stack';
import { DashboardStack } from './dashboard-stack';
import { FridgeStack } from './fridge-stack';
import { SettingsStack } from './settings-stack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={ScreenName.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.FRIDGE_STACK}
        component={FridgeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="fridge" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.ASSISTANT_STACK}
        component={AssistantStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="brain" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.SETTINGS_STACK}
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };
