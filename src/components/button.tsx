import { ComponentProps, FC, useMemo } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

import { Text } from './text';

const variantStyles = tv({
  base: 'border border-transparent rounded-md items-center justify-center px-4 py-3',
  variants: {
    type: {
      filled: 'bg-secondary500',
      outlined: 'border-secondary500 bg-neutral50',
      ghost: 'bg-transparent',
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
      className={`${variantStyles({ type })} ${className ?? ''}`}
      {...props}
    >
      <Text variants={textVariants}>{title}</Text>
    </Pressable>
  );
};

export { Button };
