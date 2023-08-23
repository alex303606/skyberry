import React, {useCallback} from 'react';
import {Block, Background, Row, Typography, Icon} from '@components';
import {
  LanguagePicker,
  SocialNetworks,
  Footer,
  Locations,
  FooterItem,
} from './components';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {EScreens, HomeScreenProps, MainCategory} from '@interfaces';
import {useConfig} from '@hooks';
import {useMainCategories} from './hooks';
import {Colors} from '@config';
import {useTranslation} from 'react-i18next';
const logo = require('@assets/images/logo.png');
const {Regular14} = Typography;

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {navigate} = useNavigation();
  const navigateToCategoryHandler = useCallback(
    (location: MainCategory) => {
      navigate(EScreens.CATEGORY_SCREEN, {
        location,
      });
    },
    [navigate],
  );
  const {t} = useTranslation();

  const {socialNetworks, app, options, languages} = useConfig();
  const mainCategories = useMainCategories();
  console.log(options);
  return (
    <Background image={app.backgroundImage}>
      <Block flex={1} alignItems={'center'}>
        <Row marginTop={30}>
          <Block width={'30%'} justifyContent={'center'} alignItems={'center'}>
            <FooterItem option={options[0]} />
            <Regular14
              numberOfLines={1}
              marginTop={5}
              style={{color: Colors.white}}>
              {options[3].title}
            </Regular14>
          </Block>
          <Block width={'30%'}>
            <SocialNetworks socialNetworks={socialNetworks} />
          </Block>
          <Block width={'30%'} justifyContent={'center'} alignItems={'center'}>
            <FooterItem option={options[4]} />
            <Regular14
              numberOfLines={1}
              marginTop={5}
              style={{color: Colors.white}}>
              {options[5].title}
            </Regular14>
          </Block>
        </Row>
        <Block alignItems={'center'} justifyContent={'center'} flex={1}>
          <Logo source={logo} />
        </Block>
        <StyledBlock>
          <Locations
            onSelectCategory={navigateToCategoryHandler}
            locations={mainCategories}
          />
        </StyledBlock>
        <Row justifyContent={'center'} alignItems={'center'} marginBottom={30}>
          <Block alignItems={'center'} marginHorizontal={100}>
            <Block marginBottom={5}>
              <Icon color={Colors.white} size={30} name={options[1].icon} />
            </Block>
            <Regular14
              numberOfLines={1}
              marginTop={5}
              style={{color: Colors.white}}>
              {t(`footer.${options[1].title}`, {value: options[1].value})}
            </Regular14>
          </Block>
          <Block alignItems={'center'} marginHorizontal={100}>
            <Block marginBottom={5}>
              <Icon color={Colors.white} size={30} name={options[2].title} />
            </Block>
            <Regular14
              numberOfLines={1}
              marginTop={5}
              style={{color: Colors.white}}>
              {t(`footer.${options[2].title}`, {value: options[2].value})}
            </Regular14>
          </Block>
        </Row>
        <Row marginBottom={20}>
          <Regular14
            numberOfLines={1}
            marginTop={5}
            style={{color: Colors.white}}>
            *при наличии аллергии на какой-либо продукт, пожалуйста, сообщите об
            этом официанту
          </Regular14>
        </Row>
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
