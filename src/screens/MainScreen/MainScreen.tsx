import React, {useCallback, useState} from 'react';
import {Block, Background, Typography} from '@components';
import styled from 'styled-components/native';
import {Colors} from '@config';
import {useNavigation} from '@react-navigation/native';
import {EScreens, MainScreenProps} from '@interfaces';
import {useHardwareBackPress} from '@hooks';
import {APP_BACKGROUND_IMAGE} from '../../../constans';
import {VideoPlayer} from './components';
import {Controls} from './components/Controls';
const {Regular30} = Typography;

export const MainScreen: React.FC<MainScreenProps> = () => {
  const {navigate} = useNavigation();
  const handleNavigateToMenu = useCallback(() => {
    navigate(EScreens.HOME_SCREEN);
  }, [navigate]);

  const onHardwareBack = useCallback(() => true, []);
  useHardwareBackPress(onHardwareBack);

  const [enableVideo, setEnableVideo] = useState(true);

  if (enableVideo) {
    return (
      <Block flex={1}>
        <VideoPlayer
          videoURL={
            'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4'
          }
        />
        <Block flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
          <StyledPressable onPress={handleNavigateToMenu}>
            <Regular30 color={Colors.fillColor}>Перейти в меню</Regular30>
          </StyledPressable>
        </Block>
        <Controls set={setEnableVideo} />
      </Block>
    );
  }

  return (
    <Background image={APP_BACKGROUND_IMAGE} showOverlay={false}>
      <Block flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <StyledPressable onPress={handleNavigateToMenu}>
          <Regular30 color={Colors.fillColor}>Перейти в меню</Regular30>
        </StyledPressable>
      </Block>
      <Controls set={setEnableVideo} />
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
