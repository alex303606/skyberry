import React from 'react';
import {Colors} from '@config';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import styled from 'styled-components/native';
import {
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';

const {BoldUpperCase48} = Typography;

type Props = Pick<StackHeaderProps, 'scene' | 'navigation'> & {
  scene: {
    descriptor: {options: StackNavigationOptions & {title?: string}};
  };
};

export const Header: React.FC<Props> = ({scene, navigation}) => {
  const {goBack, popToTop} = navigation;

  const {title} = scene.descriptor.options;

  return (
    <Row padding={15} alignItems={'center'} pointerEvents="box-none">
      <IconContainer backgroundColor={Colors.accentColor}>
        <StyledPressable hitSlop={16} onPress={goBack}>
          <Icon name={IconNames.back} color={Colors.fillColor} size={60} />
        </StyledPressable>
      </IconContainer>
      <Row justifyContent={'center'} flex={1} paddingHorizontal={'15%'}>
        <BoldUpperCase48 color={Colors.accentColor} numberOfLines={1}>
          {title || ''}
        </BoldUpperCase48>
      </Row>
      <IconContainer backgroundColor={Colors.accentColor}>
        <StyledPressable hitSlop={16} onPress={popToTop}>
          <Icon name={IconNames.home} color={Colors.fillColor} size={50} />
        </StyledPressable>
      </IconContainer>
    </Row>
  );
};

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.fillColor,
  },
}))({
  padding: 5,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const IconContainer = styled(Block)({
  borderRadius: 35,
  overflow: 'hidden',
  width: 70,
  height: 70,
});
