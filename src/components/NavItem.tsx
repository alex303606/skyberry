import React, {useCallback} from 'react';
import {TouchableOpacity, LayoutChangeEvent} from 'react-native';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {Category} from '@interfaces';
import {useCurrentLanguage} from '@hooks';

const {RegularUpperCase18} = Typography;

type Props = {
  active: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress: (category: Category) => void;
  category: Category;
};

export const NavItem: React.FC<Props> = ({
  active,
  onLayout,
  onPress,
  category,
}) => {
  const bullet = active ? (
    <Block>
      <Icon color={Colors.accentColor} name={IconNames.cuisine} size={35} />
    </Block>
  ) : (
    <Bullet backgroundColor={Colors.accentColor} />
  );

  const {childCount} = category;
  const {title} = useCurrentLanguage(category);

  const onPressHandler = useCallback(() => {
    onPress(category);
  }, [category, onPress]);

  return (
    <TouchableOpacity onPress={onPressHandler}>
      <Row
        onLayout={onLayout}
        alignItems={'center'}
        paddingVertical={30}
        paddingHorizontal={20}>
        {bullet}
        <Block marginLeft={30}>
          <RegularUpperCase18
            numberOfLines={1}
            color={active ? Colors.accentColor : Colors.secondaryColor}>
            {title}
            {` (${childCount})`}
          </RegularUpperCase18>
        </Block>
      </Row>
    </TouchableOpacity>
  );
};

const Bullet = styled(Block)({
  width: 15,
  height: 15,
  borderRadius: 10,
});
