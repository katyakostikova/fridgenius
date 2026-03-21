import { FC } from 'react';
import { View, ViewProps } from 'react-native';

import { cn } from 'helpers';

import { Text } from './text';

type FormFieldProps = {
  label: string;
  error?: string | null;
} & ViewProps;

const FormField: FC<FormFieldProps> = ({
  label,
  className,
  error,
  children,
  ...props
}) => {
  return (
    <View className={cn('gap-2', className)} {...props}>
      <Text variants={{ type: 'label' }}>{label}</Text>
      {children}
      {!!error ? <Text variants={{ color: 'error' }}>{error}</Text> : null}
    </View>
  );
};

export { FormField };
