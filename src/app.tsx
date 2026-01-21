import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { NavigationContainer } from '@react-navigation/native';
import { getLocales } from 'expo-localization';

import { BottomTabsNavigator } from 'navigation';
import { I18nAppText } from 'services';

I18nAppText.locale = getLocales()[0].languageCode ?? 'en';

export default function App() {
  const [areFontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
