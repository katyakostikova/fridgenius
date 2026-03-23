import { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

const variantStyles = tv({
  variants: {
    color: {
      neutral800: 'text-neutral800',
      error: 'text-error500',
      primary500: 'text-primary500',
      secondary500: 'text-secondary500',
      neutral50: 'text-neutral50',
      neutral600: 'text-neutral600',
      neutral700: 'text-neutral700',
      neutralOn: 'text-neutralOn',
      success: 'text-success500',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    weight: {
      normal: 'font-nunito',
      medium: 'font-nunito-medium',
      semiBold: 'font-nunito-semi-bold',
      bold: 'font-nunito-bold',
      extraBold: 'font-nunito-extra-bold',
    },
    type: {
      header: 'font-nunito-bold ios:text-xl android:text-2xl',
      label: 'font-nunito-bold text-sm uppercase tracking-wide',
    },
  },
  defaultVariants: {
    color: 'neutral800',
    size: 'md',
    weight: 'normal',
  },
});

type TextVariants = VariantProps<typeof variantStyles>;

type TextProps = { variants?: TextVariants } & RNTextProps;

const Text: FC<TextProps> = ({ variants, className, children, ...props }) => {
  return (
    <RNText className={twMerge(variantStyles(variants), className)} {...props}>
      {children}
    </RNText>
  );
};

export { Text };
