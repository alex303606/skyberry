import React, {useCallback} from 'react';
import {ScrollView, LayoutChangeEvent} from 'react-native';
import {CATEGORIES} from '../../constans';
import {NavItem} from '@components';
import {Block} from './helpers';
import {ICategory} from '@interfaces';

type Props = {
  activeNavItemId: number;
  onSelect: (category: ICategory) => void;
  onNavLayout?: (event: LayoutChangeEvent) => void;
};

export const SideBar = React.forwardRef<ScrollView, Props>(
  ({activeNavItemId, onSelect, onNavLayout, ...props}, ref) => {
    const onLayoutHandler = useCallback(
      (index: number) => () => {
        return index === 0 ? onNavLayout : undefined;
      },
      [onNavLayout],
    );
    const categories: ICategory[] = CATEGORIES;

    const renderItem = useCallback(
      (category, index) => (
        <NavItem
          category={category}
          onLayout={onLayoutHandler(index)}
          key={category.id}
          active={category.id === activeNavItemId}
          onPress={onSelect}
        />
      ),
      [activeNavItemId, onLayoutHandler, onSelect],
    );

    return (
      <Block flex={2}>
        <ScrollView ref={ref} {...props}>
          {categories.map(renderItem)}
        </ScrollView>
      </Block>
    );
  },
);
