import React, {useRef, useState, useCallback} from 'react';
import {Background, Block, Row, SideBar} from '@components';
import {Category, NavigationComponent} from './components';
import {
  Dimensions,
  FlatList,
  ScrollView,
  LayoutChangeEvent,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CategoryScreenProps, EScreens, ICategory} from '@interfaces';
import {CATEGORIES} from '../../../constans';
import {useSetScreenOptions} from '@hooks';
import {useTranslation} from 'react-i18next';

const {height} = Dimensions.get('screen');

const getItemLayout = (_: unknown, index: number) => ({
  index,
  length: height,
  offset: height * index,
});

const image =
  'https://api.interior.ru/media/images/DESIGN/Modnoe%20Mesto/Russki_restaurant/cover_RUSKI_interior_5.jpg';

const keyExtractor = (item: any) => item.id;

export const CategoryScreen: React.FC<CategoryScreenProps> = ({
  route: {
    params: {location},
  },
}) => {
  const {t} = useTranslation();
  const {navigate} = useNavigation();
  const navList = useRef<ScrollView | null>(null);
  const categoriesList = useRef<FlatList>(null);
  const [navItemHeight, setNavItemHeight] = useState<number>(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState<number>(0);
  const [activeNavItem, setActiveNavItem] = useState<number>(0);

  useSetScreenOptions(
    {
      title: t(`categories.${location.name}`),
    },
    [],
  );

  const onNavLayout = useCallback((event: LayoutChangeEvent) => {
    const {height: LHeight} = event.nativeEvent.layout;
    setNavItemHeight(LHeight);
  }, []);

  const onScroll = useCallback(
    (event: any) => {
      const scrollPosition = event.nativeEvent.contentOffset.y;
      const categoryIndex = Math.round(scrollPosition / height);
      const layoutHeight = event.nativeEvent.layoutMeasurement.height;
      const navItemsPerPage = Math.floor(layoutHeight / navItemHeight);
      const page = Math.floor(categoryIndex / navItemsPerPage);
      navList.current?.scrollTo({y: page * layoutHeight});
      setCurrentScrollPosition(scrollPosition);
      setActiveNavItem(CATEGORIES[categoryIndex].id);
    },
    [navItemHeight],
  );

  const onTopPressed = useCallback(() => {
    const futurePositionIndex = Math.round(
      (currentScrollPosition - height) / height,
    );
    if (futurePositionIndex >= 0) {
      categoriesList.current?.scrollToIndex({
        index: futurePositionIndex,
      });
    }
  }, [currentScrollPosition]);

  const onBottomPressed = useCallback(() => {
    const futurePositionIndex = Math.round(
      (currentScrollPosition + height) / height,
    );

    if (futurePositionIndex < CATEGORIES.length) {
      categoriesList.current?.scrollToIndex({
        index: futurePositionIndex,
      });
    }
  }, [currentScrollPosition]);

  const onSelect = useCallback(
    (category: ICategory) => {
      navigate(EScreens.MENU_SCREEN, {
        category,
      });
    },
    [navigate],
  );

  const categories: ICategory[] = CATEGORIES;

  const renderItem = useCallback(
    ({item}: {item: ICategory}) => (
      <Category key={item.id} item={item} onSelect={onSelect} />
    ),
    [onSelect],
  );

  return (
    <Background showOverlay={true} image={image}>
      <Row flex={1}>
        <Block flex={6}>
          <FlatList
            snapToAlignment="start"
            decelerationRate="fast"
            snapToInterval={height}
            ref={categoriesList}
            onScroll={onScroll}
            data={categories}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
          />
          <NavigationComponent
            onBottomPressed={onBottomPressed}
            onTopPressed={onTopPressed}
          />
        </Block>
        <SideBar
          onNavLayout={onNavLayout}
          activeNavItemId={activeNavItem}
          onSelect={onSelect}
          ref={navList}
        />
      </Row>
    </Background>
  );
};