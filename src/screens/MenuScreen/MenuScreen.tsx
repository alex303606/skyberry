import React, {useCallback, useRef, useMemo} from 'react';
import {Background, Block, Row, Position, SideBar} from '@components';
import {FlatList} from 'react-native';
import Dash from 'react-native-dash';
import {Colors} from '@config';
import {EScreens, Category, MenuScreenProps, Dish} from '@interfaces';
import {useNavigation} from '@react-navigation/native';
import {
  useConfig,
  useSetScreenOptions,
  useCategoriesByParentId,
  useCurrentLanguage,
} from '@hooks';
import {useCategoriesById} from './hooks';

const keyExtractor = (item: any) => item.id;

export const MenuScreen: React.FC<MenuScreenProps> = ({
  route: {
    params: {categoryId, parentCategoryId},
  },
}) => {
  const category = useCategoriesById(categoryId);
  const categories = useCategoriesByParentId(parentCategoryId);
  const {navigate} = useNavigation();
  const positionsList = useRef<FlatList>(null);
  const {
    app: {backgroundImage},
  } = useConfig();

  const onSelect = useCallback(
    (item: Category) => {
      navigate(EScreens.MENU_SCREEN, {
        categoryId: item.id,
        parentCategoryId,
      });
    },
    [navigate, parentCategoryId],
  );

  useSetScreenOptions(
    {
      title: useCurrentLanguage(category).title,
    },
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: Dish}) => <Position item={item} />,
    [],
  );

  const separatorComponent = useCallback(
    () => (
      <Dash
        dashThickness={2}
        dashGap={10}
        dashColor={Colors.accentColor}
        dashLength={25}
      />
    ),
    [],
  );

  const contentContainerStyle = useMemo(() => ({paddingTop: 100}), []);

  if (!category) {
    return null;
  }

  return (
    <Background showOverlay={true} image={backgroundImage}>
      <Row>
        <Block flex={6}>
          <FlatList
            ref={positionsList}
            contentContainerStyle={contentContainerStyle}
            data={category.dishes}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={separatorComponent}
            renderItem={renderItem}
          />
        </Block>
        <SideBar
          categories={categories}
          activeNavItemId={category.id}
          onSelect={onSelect}
        />
      </Row>
    </Background>
  );
};
