import React, {useCallback} from 'react';
import {ScrollView, LayoutChangeEvent} from 'react-native';
import {NavItem} from '@components';
import {Block} from './helpers';
import {Category} from '@interfaces';

type Props = {
  activeNavItemId: string;
  onSelect: (category: Category) => void;
  onNavLayout?: (event: LayoutChangeEvent) => void;
  categories: Category[];
};

export const SideBar = React.forwardRef<ScrollView, Props>(
  ({activeNavItemId, onSelect, onNavLayout, categories, ...props}, ref) => {
    const onLayoutHandler = useCallback(
      (index: number) => () => {
        return index === 0 ? onNavLayout : undefined;
      },
      [onNavLayout],
    );

    const renderItem = useCallback(
      (category: Category, index) => (
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
