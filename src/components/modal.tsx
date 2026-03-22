import { BlurView } from 'expo-blur';
import { FC, ReactNode } from 'react';
import { Modal as RNModal, Pressable, StyleSheet, View } from 'react-native';

import { cn } from 'helpers';

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  backdropAccessibilityLabel?: string;
  contentClassName?: string;
};

const Modal: FC<ModalProps> = ({
  visible,
  onClose,
  children,
  backdropAccessibilityLabel = 'Close',
  contentClassName,
}) => (
  <RNModal
    visible={visible}
    transparent
    animationType="fade"
    onRequestClose={onClose}
    statusBarTranslucent
  >
    <View className="flex-1">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={backdropAccessibilityLabel}
        onPress={onClose}
        className="absolute inset-0 bg-neutral900/15"
      >
        <BlurView
          intensity={45}
          tint="dark"
          style={StyleSheet.absoluteFillObject}
        />
      </Pressable>
      <View
        pointerEvents="box-none"
        className={cn(
          'absolute inset-0 items-center justify-center px-5',
          contentClassName,
        )}
      >
        {children}
      </View>
    </View>
  </RNModal>
);

export { Modal };
