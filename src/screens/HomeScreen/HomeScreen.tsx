import React, {useCallback} from 'react';
import {Block, Background} from '@components';
import {LanguagePicker, SocialNetworks, Footer, Locations} from './components';
import styled from 'styled-components/native';
import {MENU} from '../../../constans';
import {useNavigation} from '@react-navigation/native';
import {EScreens, HomeScreenProps, ILocation} from '@interfaces';
import {useConfig} from '@hooks';
const logo = require('@assets/images/logo.png');

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {navigate} = useNavigation();
  const navigateToCategoryHandler = useCallback(
    (location: ILocation) => {
      navigate(EScreens.CATEGORY_SCREEN, {
        location,
      });
    },
    [navigate],
  );

  const {socialNetworks, app, options, languages} = useConfig();
  const locations: ILocation[] = MENU;

  return (
    <Background image={app.backgroundImage}>
      <Block flex={1} alignItems={'center'}>
        <SocialNetworks socialNetworks={socialNetworks} />
        <Block alignItems={'center'} justifyContent={'center'} flex={1}>
          <Logo source={logo} />
        </Block>
        <StyledBlock>
          <Locations
            onSelectCategory={navigateToCategoryHandler}
            locations={locations}
          />
          <Footer options={options} />
        </StyledBlock>
        <LanguagePicker languages={languages} />
      </Block>
    </Background>
  );
};

export const Logo = styled.Image({
  width: 700,
  height: 400,
  resizeMode: 'contain',
  marginVertical: 30,
});

const StyledBlock = styled(Block)({
  width: '70%',
});
