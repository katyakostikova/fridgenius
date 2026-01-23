import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { getLocales } from 'expo-localization';

import { BottomTabsNavigator } from 'navigation';
import { db, I18nAppText } from 'services';

import migrations from './drizzle/migrations';

I18nAppText.locale = getLocales()[0].languageCode ?? 'en';

export default function App() {
  // TODO: add case for error
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { success, error } = useMigrations(db, migrations);
  const [areFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  // TODO: add splash screen
  if (!areFontsLoaded || !success) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
