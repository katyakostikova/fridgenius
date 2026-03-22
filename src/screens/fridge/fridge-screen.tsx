import { useIsFocused } from '@react-navigation/native';
import { useLiveQuery } from 'drizzle-orm/expo-sqlite';
import { FC, useCallback, useMemo, useState } from 'react';
import { SectionList } from 'react-native';

import { ScreenName } from 'common/enums';
import { FridgeScreenProps, IconName, Item } from 'common/types';
import { FabWithOptions, ScreenWrapper } from 'components';
import { categoriesService, I18nAppText } from 'services';

import { ListItem } from './components/list-item';
import { SectionHeader } from './components/section-header';
import { getSectionListData } from './helpers';
import { Section } from './types';

const FridgeScreen: FC<FridgeScreenProps> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const { data: categories } = useLiveQuery(
    categoriesService.getAllWithItems(),
    [isFocused],
  );
  const sections = useMemo(() => getSectionListData(categories), [categories]);

  const [expandedSectionIds, setExpandedSectionIds] = useState<Set<number>>(
    () => new Set(),
  );

  const toggleSection = useCallback((sectionId: number) => {
    setExpandedSectionIds((prev) => {
      const next = new Set(prev);

      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }, []);

  const renderSectionHeader = useCallback(
    ({ section }: { section: Section }) => {
      return (
        <SectionHeader
          title={section.title}
          isExpanded={expandedSectionIds.has(section.id)}
          data={section.data}
          onPress={() => toggleSection(section.id)}
        />
      );
    },
    [expandedSectionIds, toggleSection],
  );

  const renderItem = useCallback(
    ({ item }: { item: Item }) => {
      if (expandedSectionIds.has(item.categoryId ?? 0)) {
        return <ListItem item={item} />;
      }

      return null;
    },
    [expandedSectionIds],
  );

  const handleNavigateToCategoryScreen = useCallback(
    (categoryId?: number) => {
      navigation.navigate(ScreenName.CATEGORY_SCREEN, { categoryId });
    },
    [navigation],
  );

  const handleNavigateToItemScreen = useCallback(
    (itemId?: number) => {
      navigation.navigate(ScreenName.ITEM_SCREEN, { itemId });
    },
    [navigation],
  );

  const fabOptions = useMemo(
    () => [
      {
        name: I18nAppText.t('addItem'),
        iconName: 'plus-circle' as IconName,
        onPress: () => handleNavigateToItemScreen(),
      },
      {
        name: I18nAppText.t('addCategory'),
        iconName: 'folder' as IconName,
        onPress: () => handleNavigateToCategoryScreen(),
      },
    ],
    [handleNavigateToCategoryScreen, handleNavigateToItemScreen],
  );

  return (
    <ScreenWrapper>
      <SectionList
        sections={sections}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <FabWithOptions
        options={fabOptions}
        className="absolute right-3 bottom-3"
      />
    </ScreenWrapper>
  );
};

export { FridgeScreen };
