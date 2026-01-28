import { ComponentProps, FC, Fragment, useState } from 'react';
import { Pressable, View } from 'react-native';

import { AppColor } from 'common/enums';
import { IconName } from 'common/types';

import { Divider } from './divider';
import { Fab } from './fab';
import { Icon } from './icon';
import { Text } from './text';

type Option = {
  name: string;
  iconName: IconName;
  onPress: () => void;
};

type FabWithOptionsProps = {
  options: Option[];
} & Omit<ComponentProps<typeof Fab>, 'onPress'>;

const FabWithOptions: FC<FabWithOptionsProps> = ({
  options,
  className,
  ...props
}) => {
  const [areOptionsShown, setAreOptionsShown] = useState(false);

  const handleToggleOptions = () => {
    setAreOptionsShown((prev) => !prev);
  };

  return (
    <View className={`items-end ${className ?? ''}`}>
      {areOptionsShown && (
        <>
          <View className="p-4 border-2 rounded-lg border-secondary400 bg-secondary200 ">
            {options.map((item, index) => (
              <Fragment key={item.name}>
                <Pressable
                  key={item.name}
                  className="flex-row items-center active:opacity-70 px-1"
                >
                  <Icon
                    name={item.iconName}
                    size={24}
                    color={AppColor.NEUTRAL_600}
                    className="mr-2"
                  />
                  <Text
                    variants={{
                      color: 'neutral600',
                      size: 'lg',
                      weight: 'medium',
                    }}
                  >
                    {item.name}
                  </Text>
                </Pressable>
                {index !== options.length - 1 && (
                  <Divider className="bg-neutral600 my-3" />
                )}
              </Fragment>
            ))}
          </View>
          <View className="mr-[25px] h-0 w-0 bg-transparent mb-3 border-l-[10px] border-r-[10px] border-t-[10px] border-t-secondary400 border-l-transparent border-r-transparent" />
        </>
      )}
      <Fab onPress={handleToggleOptions} {...props} />
    </View>
  );
};

export { FabWithOptions };
