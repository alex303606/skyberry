import React, {useCallback, useRef, useMemo} from 'react';
import {Background, Block, Row, Position, SideBar} from '@components';
import {FlatList} from 'react-native';
import Dash from 'react-native-dash';
import {Colors} from '@config';
import {EScreens, ICategory, IPosition, MenuScreenProps} from '@interfaces';
import {
  APP_BACKGROUND_IMAGE,
  SELECTED_CATEGORY_POSITIONS,
} from '../../../constans';
import {useNavigation} from '@react-navigation/native';
import {useSetScreenOptions} from '@hooks';

const keyExtractor = (item: any) => item.id;

export const MenuScreen: React.FC<MenuScreenProps> = ({
  route: {
    params: {category},
  },
}) => {
  const {navigate} = useNavigation();
  const positionsList = useRef<FlatList>(null);

  const onSelect = useCallback(
    (item: ICategory) => {
      navigate(EScreens.MENU_SCREEN, {
        category: item,
      });
    },
    [navigate],
  );

  useSetScreenOptions(
    {
      title: category.title,
    },
    [],
  );

  const selectedCategoryPosition: IPosition[] = SELECTED_CATEGORY_POSITIONS;

  const renderItem = useCallback(
    ({item}: {item: IPosition}) => <Position item={item} />,
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

  return (
    <Background showOverlay={true} image={APP_BACKGROUND_IMAGE}>
      <Row>
        <Block flex={6}>
          <FlatList
            ref={positionsList}
            contentContainerStyle={contentContainerStyle}
            data={selectedCategoryPosition}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={separatorComponent}
            renderItem={renderItem}
          />
        </Block>
        <SideBar activeNavItemId={category.id} onSelect={onSelect} />
      </Row>
    </Background>
  );
};
