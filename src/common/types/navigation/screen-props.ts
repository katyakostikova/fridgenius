import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreenName } from 'common/enums';

import {
  AssistantStackParamList,
  DashboardStackParamList,
  FridgeStackParamList,
  SettingsStackParamList,
} from './param-list';

type DashboardScreenProps = NativeStackScreenProps<
  DashboardStackParamList,
  typeof ScreenName.DASHBOARD_SCREEN
>;

type FridgeScreenProps = NativeStackScreenProps<
  FridgeStackParamList,
  typeof ScreenName.FRIDGE_SCREEN
>;

type AssistantScreenProps = NativeStackScreenProps<
  AssistantStackParamList,
  typeof ScreenName.ASSISTANT_SCREEN
>;

type SettingsScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  typeof ScreenName.SETTINGS_SCREEN
>;

export type {
  DashboardScreenProps,
  FridgeScreenProps,
  AssistantScreenProps,
  SettingsScreenProps,
};
