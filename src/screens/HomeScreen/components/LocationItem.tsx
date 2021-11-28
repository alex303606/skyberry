import React, {useCallback} from 'react';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {Icon, Typography} from '@components';
import {MainCategory} from '@interfaces';
import {useCurrentLanguage} from '@hooks';
const {Regular22} = Typography;

type Props = {
  location: MainCategory;
  onPress: (location: MainCategory) => void;
};

export const LocationItem: React.FC<Props> = ({location, onPress}) => {
  const {icon} = location;
  const {title} = useCurrentLanguage(location);
  const onPressHandler = useCallback(
    () => onPress(location),
    [location, onPress],
  );

  return (
    <Wrapper>
      <StyledPressable onPress={onPressHandler}>
        <IconWrapper>
          <Icon name={icon} color={Colors.accentColor} size={30} />
        </IconWrapper>
        <Regular22 numberOfLines={1} color={Colors.accentColor}>
          {title}
        </Regular22>
      </StyledPressable>
    </Wrapper>
  );
};

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.fillColor,
  },
}))({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 50,
});

export const Wrapper = styled.View({
  borderRadius: 50,
  overflow: 'hidden',
  borderWidth: 2,
  borderColor: Colors.accentColor,
  width: '30%',
});

export const IconWrapper = styled.View({
  position: 'absolute',
  left: 15,
});
