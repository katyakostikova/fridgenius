import { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';

type InputProps = TextInputProps;

const Input: FC<InputProps> = ({ className, ...props }) => {
  return (
    <TextInput
      className={`px-3 py-4 border bg-neutralOn border-neutral100/60 rounded-xl font-nunito text-neutral800 ${className ?? ''}`}
      {...props}
    />
  );
};

export { Input };
