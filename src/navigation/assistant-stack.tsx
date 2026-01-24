import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppColor, ScreenName } from 'common/enums';
import { AssistantStackParamList } from 'common/types';
import { Text } from 'components';
import { AssistantScreen } from 'screens';
import { I18nAppText } from 'services';

const Stack = createNativeStackNavigator<AssistantStackParamList>();

const AssistantStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => (
          <Text variants={{ type: 'header', color: 'neutral50' }}>
            {children}
          </Text>
        ),
        headerStyle: {
          backgroundColor: AppColor.PRIMARY_500,
        },
        headerBackButtonDisplayMode: 'minimal',
      }}
    >
      <Stack.Screen
        name={ScreenName.ASSISTANT_SCREEN}
        component={AssistantScreen}
        options={{
          title: I18nAppText.t('assistantScreenName'),
        }}
      />
    </Stack.Navigator>
  );
};

export { AssistantStack };
