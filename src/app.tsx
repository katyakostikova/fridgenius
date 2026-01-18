import { NavigationContainer } from '@react-navigation/native';

import { BottomTabsNavigator } from 'navigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
