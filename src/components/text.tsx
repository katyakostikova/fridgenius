import { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { tv, VariantProps } from 'tailwind-variants';

const variantStyles = tv({
  base: 'font-nunito color-neutral800 text-md',
  variants: {
    color: {
      neutral800: 'color-neutral800',
      error: 'color-error500',
      secondary500: 'color-secondary500',
      neutral50: 'color-neutral50',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      normal: 'font-nunito',
      medium: 'font-nunito-medium',
      semiBold: 'font-nunito-semi-bold',
      bold: 'font-nunito-bold',
    },
    type: {
      header: 'font-nunito-bold ios:text-xl android:text-2xl',
      label: 'font-nunito-semi-bold text-lg',
    },
  },
});

type TextVariants = VariantProps<typeof variantStyles>;

type TextProps = { variants?: TextVariants } & RNTextProps;

const Text: FC<TextProps> = ({ variants, className, children, ...props }) => {
  return (
    <RNText
      className={`${variantStyles(variants)} ${className ?? ''}`}
      {...props}
    >
      {children}
    </RNText>
  );
};

export { Text };
