import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppColor, ScreenName } from 'common/enums';
import { BottomTabParamList } from 'common/types';

import { AssistantStack } from './assistant-stack';
import { BottomTabItem } from './components/bottom-tab-item';
import { DashboardStack } from './dashboard-stack';
import { FridgeStack } from './fridge-stack';
import { SettingsStack } from './settings-stack';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabsNavigator = () => {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 80 + insets.bottom;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: AppColor.PRIMARY_500,
        tabBarInactiveTintColor: AppColor.NEUTRAL_300,
        tabBarStyle: {
          backgroundColor: AppColor.NEUTRAL_25,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          overflow: 'hidden',
          height: tabBarHeight,
          paddingTop: 25,
          paddingBottom: insets.bottom,
          borderColor: 'transparent',
        },
        tabBarIconStyle: {
          alignSelf: 'stretch',
          width: '100%',
          minHeight: 50,
        },
      }}
    >
      <Tab.Screen
        name={ScreenName.DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <BottomTabItem
              color={color}
              focused={focused}
              iconName="view-dashboard"
              labelKey="bottomTabDashboard"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.FRIDGE_STACK}
        component={FridgeStack}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <BottomTabItem
              color={color}
              focused={focused}
              iconName="fridge"
              labelKey="bottomTabFridge"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.ASSISTANT_STACK}
        component={AssistantStack}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <BottomTabItem
              color={color}
              focused={focused}
              iconName="brain"
              labelKey="bottomTabAssistant"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.SETTINGS_STACK}
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <BottomTabItem
              color={color}
              focused={focused}
              iconName="cog"
              labelKey="bottomTabSettings"
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };
