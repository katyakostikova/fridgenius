import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

import { ScreenName } from 'common/enums';

import { AssistantStack } from './assistant-stack';
import { DashboardStack } from './dashboard-stack';
import { FridgeStack } from './fridge-stack';
import { SettingsStack } from './settings-stack';

const Tab = createNativeBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator screenOptions={{ title: '' }}>
      <Tab.Screen
        name={ScreenName.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          tabBarLabelVisibilityMode: 'unlabeled',
        }}
      />
      <Tab.Screen
        name={ScreenName.FRIDGE_STACK}
        component={FridgeStack}
        options={{
          tabBarLabelVisibilityMode: 'unlabeled',
        }}
      />
      <Tab.Screen
        name={ScreenName.ASSISTANT_STACK}
        component={AssistantStack}
        options={{
          tabBarLabelVisibilityMode: 'unlabeled',
        }}
      />
      <Tab.Screen
        name={ScreenName.SETTINGS_STACK}
        component={SettingsStack}
        options={{
          tabBarLabelVisibilityMode: 'unlabeled',
        }}
      />
    </Tab.Navigator>
  );
}

export { BottomTabsNavigator };
