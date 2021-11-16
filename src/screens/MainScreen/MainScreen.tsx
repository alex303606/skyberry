import React, {useCallback, useState} from 'react';
import {Block, Background, Typography} from '@components';
import styled from 'styled-components/native';
import {Colors} from '@config';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {EScreens, MainScreenProps} from '@interfaces';
import {useConfig, useHardwareBackPress} from '@hooks';
import {VideoPlayer} from './components';
const {Regular30} = Typography;

export const MainScreen: React.FC<MainScreenProps> = () => {
  const {navigate} = useNavigation();
  const onHardwareBack = useCallback(() => true, []);
  useHardwareBackPress(onHardwareBack);
  const {
    app: {promoImage, promoVideo},
  } = useConfig();

  const handleNavigateToMenu = useCallback(
    () => navigate(EScreens.HOME_SCREEN),
    [navigate],
  );

  const [paused, setPaused] = useState(true);

  useFocusEffect(
    useCallback(() => {
      if (paused) {
        setPaused(false);
      }

      return () => {
        setPaused(true);
      };
    }, []),
  );

  if (promoVideo?.length) {
    return (
      <Block flex={1}>
        <VideoPlayer
          poster={promoImage || undefined}
          paused={paused}
          videoURL={promoVideo}
        />
        <Block flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
          <StyledPressable onPress={handleNavigateToMenu}>
            <Regular30 color={Colors.fillColor}>Перейти в меню</Regular30>
          </StyledPressable>
        </Block>
      </Block>
    );
  }

  return (
    <Background image={promoImage} showOverlay={false}>
      <Block flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <StyledPressable onPress={handleNavigateToMenu}>
          <Regular30 color={Colors.fillColor}>Перейти в меню</Regular30>
        </StyledPressable>
      </Block>
    </Background>
  );
};

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
