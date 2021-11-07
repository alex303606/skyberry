import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Colors} from '@config';
import {Block, Icon, IconNames} from '@components';
import styled from 'styled-components/native';
const {width} = Dimensions.get('screen');

const CAT_NAV_BUTTON_WIDTH = 60;
const CAT_NAV_BUTTONS_LEFT = width / 2 - CAT_NAV_BUTTON_WIDTH / 2;

type Props = {
  onTopPressed: () => void;
  onBottomPressed: () => void;
};

export const NavigationComponent: React.FC<Props> = ({
  onTopPressed,
  onBottomPressed,
}) => {
  return (
    <Container
      paddingVertical={10}
      alignItems={'center'}
      backgroundColor={Colors.accentColor}>
      <TouchableOpacity onPress={onTopPressed}>
        <CatNavButton size={30} marginBottom={15}>
          <Icon name={IconNames.top} size={30} />
        </CatNavButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={onBottomPressed}>
        <CatNavButton size={40}>
          <Icon name={IconNames.down} size={40} />
        </CatNavButton>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled(Block)({
  position: 'absolute',
  bottom: 0,
  width: CAT_NAV_BUTTON_WIDTH,
  left: CAT_NAV_BUTTONS_LEFT,
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
});

const CatNavButton = styled(Block)<{
  size: number;
}>(({size}) => ({
  width: size,
}));
