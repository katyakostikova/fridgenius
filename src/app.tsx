import { NavigationContainer } from '@react-navigation/native';
import { getLocales } from 'expo-localization';

import { BottomTabsNavigator } from 'navigation';
import { I18nAppText } from 'services';

I18nAppText.locale = getLocales()[0].languageCode ?? 'en';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
