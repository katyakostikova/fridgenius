import { FC } from 'react';
import { View, ViewProps } from 'react-native';

import { cn } from 'helpers';

type DividerProps = ViewProps;

const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return (
    <View
      className={cn('h-[2px] w-auto bg-neutral800', className)}
      {...props}
    />
  );
};

export { Divider };
