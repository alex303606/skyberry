import React, {useCallback} from 'react';
import {Block, Background, Typography} from '@components';
import styled from 'styled-components/native';
import {Colors} from '@config';
import {useNavigation} from '@react-navigation/native';
import {EScreens, MainScreenProps} from '@interfaces';
import {useHardwareBackPress} from '@hooks';
const {Regular30} = Typography;

const background =
  'https://cdnn21.img.ria.ru/images/07e4/07/0d/1574271676_0:79:1500:923_1920x0_80_0_0_9cd263455c663713ee89b689fad9201f.jpg.webp';

export const MainScreen: React.FC<MainScreenProps> = () => {
  const {navigate} = useNavigation();
  const handleNavigateToMenu = useCallback(() => {
    navigate(EScreens.HOME_SCREEN);
  }, [navigate]);

  const onHardwareBack = useCallback(() => true, []);
  useHardwareBackPress(onHardwareBack);

  return (
    <Background image={background} showOverlay={false}>
      <Block flex={1} alignItems={'flex-end'} justifyContent={'flex-end'}>
        <StyledPressable onPress={handleNavigateToMenu}>
          <Regular30 color={Colors.white}>Перейти в меню</Regular30>
        </StyledPressable>
      </Block>
    </Background>
  );
};

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.white,
  },
}))({
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: 'rgba(0,0,0, 0.5)',
  borderWidth: 2,
  borderColor: Colors.white,
  margin: 30,
});
