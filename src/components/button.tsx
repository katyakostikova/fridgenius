import { ComponentProps, FC, useMemo } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

import { Text } from './text';

const variantStyles = tv({
  base: 'border border-transparent rounded-md items-center justify-center px-4 py-3',
  variants: {
    type: {
      filled: 'bg-secondary500 active:bg-secondary600',
      outlined: 'border-secondary500 bg-neutral50 active:opacity-60',
      ghost: 'bg-transparent active:opacity-60',
    },
  },
});

type ButtonVariants = VariantProps<typeof variantStyles>;

type ButtonProps = {
  title: string;
  type?: ButtonVariants['type'];
} & Omit<PressableProps, 'children'>;

type TextVariant = ComponentProps<typeof Text>['variants'];

const Button: FC<ButtonProps> = ({ type, className, title, ...props }) => {
  const textVariants: TextVariant = useMemo(() => {
    const base: TextVariant = {
      weight: 'bold',
      size: 'lg',
    };

    switch (type) {
      case 'outlined':
        return { ...base, color: 'secondary500' };
      case 'ghost':
        return { ...base, color: 'secondary500' };
      case 'filled':
      default:
        return { ...base, color: 'neutral50' };
    }
  }, [type]);

  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      className={`${variantStyles({ type })} ${className ?? ''}`}
      {...props}
    >
      <Text variants={textVariants}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export { Button };
