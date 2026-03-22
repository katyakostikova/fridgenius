import { ComponentProps, FC, useMemo } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from 'helpers';

import { Text } from './text';

const variantStyles = tv({
  base: 'items-center justify-center rounded-xl border px-4 py-3 active:opacity-70',
  variants: {
    variant: {
      filled: 'border-transparent',
      outlined: 'border bg-neutral50',
      ghost: 'border-transparent bg-transparent',
    },
    color: {
      primary: '',
      secondary: '',
      neutral: '',
    },
  },
  compoundVariants: [
    { variant: 'filled', color: 'primary', class: 'bg-primary500' },
    { variant: 'filled', color: 'secondary', class: 'bg-secondary500' },
    { variant: 'filled', color: 'neutral', class: 'bg-neutral600' },
    { variant: 'outlined', color: 'primary', class: 'border-primary500' },
    { variant: 'outlined', color: 'secondary', class: 'border-secondary500' },
    { variant: 'outlined', color: 'neutral', class: 'border-neutral600' },
  ],
  defaultVariants: {
    variant: 'filled',
    color: 'secondary',
  },
});

type ButtonVariants = VariantProps<typeof variantStyles>;

type ButtonProps = {
  title: string;
  variant?: ButtonVariants['variant'];
  color?: ButtonVariants['color'];
} & Omit<PressableProps, 'children'>;

type TextVariant = ComponentProps<typeof Text>['variants'];

const Button: FC<ButtonProps> = ({
  variant = 'filled',
  color = 'primary',
  className,
  title,
  ...props
}) => {
  const textVariants: TextVariant = useMemo(() => {
    const base: TextVariant = {
      weight: 'bold',
      size: 'lg',
    };

    switch (variant) {
      case 'filled':
        return { ...base, color: 'neutralOn' };
      case 'outlined':
      case 'ghost': {
        switch (color) {
          case 'primary':
            return { ...base, color: 'primary500' };
          case 'neutral':
            return { ...base, color: 'neutral600' };
          case 'secondary':
          default:
            return { ...base, color: 'secondary500' };
        }
      }
      default:
        return { ...base, color: 'neutralOn' };
    }
  }, [variant, color]);

  return (
    <Pressable
      className={cn(variantStyles({ variant, color }), className)}
      {...props}
    >
      <Text variants={textVariants}>{title}</Text>
    </Pressable>
  );
};

export { Button };
