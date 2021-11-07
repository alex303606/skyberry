import React, {useCallback} from 'react';
import {Block, Background} from '@components';
import {LanguagePicker, SocialNetworks, Footer, Locations} from './components';
import styled from 'styled-components/native';
import {MENU, SOCIAL_NETWORKS, OPTIONS, LANGUAGES} from '../../../constans';
import {useNavigation} from '@react-navigation/native';
import {
  EScreens,
  HomeScreenProps,
  ILanguage,
  ILocation,
  IOption,
  ISocialNetwork,
} from '@interfaces';
const logo = require('@assets/images/logo.png');

const background =
  'https://firebasestorage.googleapis.com/v0/b/skyberry-6250a.appspot.com/o/background.jpg?alt=media&token=a2a36a23-92e3-4b1e-ac27-18d22d4b3da1';

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

  const socialNetworks: ISocialNetwork[] = SOCIAL_NETWORKS;
  const languages: ILanguage[] = LANGUAGES;
  const options: IOption[] = OPTIONS;
  const locations: ILocation[] = MENU;

  return (
    <Background image={background}>
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
