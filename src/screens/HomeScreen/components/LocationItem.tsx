import React, {useCallback} from 'react';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {Icon, Typography} from '@components';
import {ILocation} from '@interfaces';
import {useTranslation} from 'react-i18next';
const {Regular22} = Typography;

type Props = {
  location: ILocation;
  onPress: (location: ILocation) => void;
};

export const LocationItem: React.FC<Props> = ({location, onPress}) => {
  const {name, icon} = location;
  const {t} = useTranslation();

  const onPressHandler = useCallback(
    () => onPress(location),
    [location, onPress],
  );

  return (
    <Wrapper>
      <StyledPressable onPress={onPressHandler}>
        <IconWrapper>
          <Icon name={icon} color={Colors.white} size={30} />
        </IconWrapper>
        <Regular22 numberOfLines={1} color={Colors.white}>
          {t(`categories.${name}`)}
        </Regular22>
      </StyledPressable>
    </Wrapper>
  );
};

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.white,
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
  borderColor: Colors.white,
  width: '30%',
});

export const IconWrapper = styled.View({
  position: 'absolute',
  left: 15,
});