import { FC } from 'react';
import { View, ViewProps } from 'react-native';

type ScreenWrapperProps = ViewProps;

const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <View
      className={`flex-1 bg-primary50 px-5 py-3 ${className ?? ''}`}
      {...props}
    >
      {children}
    </View>
  );
};

export { ScreenWrapper };
