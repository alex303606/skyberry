import React, {useCallback} from 'react';
import {Block, Background} from '@components';
import {LanguagePicker, SocialNetworks, Footer, Locations} from './components';
import styled from 'styled-components/native';
import {
  MENU,
  SOCIAL_NETWORKS,
  OPTIONS,
  LANGUAGES,
  APP_BACKGROUND_IMAGE,
} from '../../../constans';
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
    <Background image={APP_BACKGROUND_IMAGE}>
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
