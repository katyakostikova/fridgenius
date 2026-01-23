import { NavigatorScreenParams } from '@react-navigation/native';

import { ScreenName } from 'common/enums';

type DashboardStackParamList = {
  [ScreenName.DASHBOARD_SCREEN]: undefined;
};

type FridgeStackParamList = {
  [ScreenName.FRIDGE_SCREEN]: undefined;
};

type AssistantStackParamList = {
  [ScreenName.ASSISTANT_SCREEN]: undefined;
};

type SettingsStackParamList = {
  [ScreenName.SETTINGS_SCREEN]: undefined;
};

type BottomTabParamList = {
  [ScreenName.DASHBOARD_STACK]: NavigatorScreenParams<DashboardStackParamList>;
  [ScreenName.FRIDGE_STACK]: NavigatorScreenParams<FridgeStackParamList>;
  [ScreenName.ASSISTANT_STACK]: NavigatorScreenParams<AssistantStackParamList>;
  [ScreenName.SETTINGS_STACK]: NavigatorScreenParams<SettingsStackParamList>;
};

export type {
  BottomTabParamList,
  DashboardStackParamList,
  FridgeStackParamList,
  AssistantStackParamList,
  SettingsStackParamList,
};
