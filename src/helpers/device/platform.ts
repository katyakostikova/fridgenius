import { Platform } from 'react-native';

import { PlatformType } from 'common/enums';

const checkIsIos = () => {
  return Platform.OS === PlatformType.IOS;
};

export { checkIsIos };
