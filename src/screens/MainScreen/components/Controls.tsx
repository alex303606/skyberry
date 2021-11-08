import React from 'react';
import {Row, Typography} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
const {Regular30} = Typography;

type Props = {
  set: (v: boolean) => void;
};

export const Controls: React.FC<Props> = ({set}) => {
  return (
    <StyledRow justifyContent={'flex-start'} alignItems={'flex-start'}>
      <StyledPressable onPress={() => set(true)}>
        <Regular30 color={Colors.fillColor}>Видео</Regular30>
      </StyledPressable>
      <StyledPressable onPress={() => set(false)}>
        <Regular30 color={Colors.fillColor}>Фото</Regular30>
      </StyledPressable>
    </StyledRow>
  );
};

const StyledRow = styled(Row)({
  position: 'absolute',
  left: 0,
  bottom: 0,
});

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.fillColor,
  },
}))({
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: 'rgba(0,0,0, 0.5)',
  borderWidth: 2,
  borderColor: Colors.fillColor,
  margin: 30,
});
