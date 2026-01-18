import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';

import { ScreenName } from 'common/enums';

import { AssistantStack } from './assistant-stack';
import { DashboardStack } from './dashboard-stack';
import { FridgeStack } from './fridge-stack';
import { SettingsStack } from './settings-stack';

const Tab = createNativeBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenName.DASHBOARD_STACK}
        component={DashboardStack}
      />
      <Tab.Screen name={ScreenName.FRIDGE_STACK} component={FridgeStack} />
      <Tab.Screen
        name={ScreenName.ASSISTANT_STACK}
        component={AssistantStack}
      />
      <Tab.Screen name={ScreenName.SETTINGS_STACK} component={SettingsStack} />
    </Tab.Navigator>
  );
}

export { BottomTabsNavigator };
