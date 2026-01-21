import { FC } from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = { variant?: 'default' | 'header' } & RNTextProps;

const variantStyles: Record<string, RNTextProps['className']> = {
  default: 'font-nunito',
  header: 'font-nunito-bold android:text-2xl ios:text-xl',
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
