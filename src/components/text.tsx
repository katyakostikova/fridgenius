import { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = { variant?: 'default' | 'header' } & RNTextProps;

const variantStyles = {
  default: 'font-nunito color-neutral800',
  header: 'font-nunito-bold android:text-2xl ios:text-xl color-neutral800',
};

const Text: FC<TextProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  return (
    <RNText
      className={`
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </RNText>
  );
};

export { Text };
