import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Dashes} from './Dashes';
import {Button} from './Button';
import {Colors} from '@config';
import {Block, IconNames, Row, Typography} from '@components';
import styled from 'styled-components/native';
import {EScreens, Dish} from '@interfaces';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useCurrentLanguage} from '@hooks';
const {Regular48, Regular24, ChocolatesUppercase36, Polls18} = Typography;
const DefaultImage = require('@assets/images/logo.png');

type Props = {
  item: Dish;
};

export const Position: React.FC<Props> = ({item}) => {
  const {price, images} = item;
  const {title, description} = useCurrentLanguage(item);
  const {navigate} = useNavigation();
  const {t} = useTranslation();

  const navigateToPosition = useCallback(() => {
    navigate(EScreens.POSITION_DETAILS_SCREEN, {
      positionId: item.id,
    });
  }, [item, navigate]);

  return (
    <TouchableWithoutFeedback onPress={navigateToPosition}>
      <Row alignItems={'center'} paddingVertical={25} paddingLeft={40}>
        <StyledImage
          source={images?.length ? {uri: images[0]} : DefaultImage}
        />
        <Block flex={1} paddingHorizontal={40}>
          <ChocolatesUppercase36
            numberOfLines={1}
            color={Colors.accentColor}
            marginBottom={20}>
            {title}
          </ChocolatesUppercase36>
          <Polls18 marginBottom={20} color={Colors.accentColor}>
            {description}
          </Polls18>
          <Button
            iconName={IconNames.menu}
            onPress={navigateToPosition}
            title={t('goToMenu')}
          />
        </Block>
        <Dashes color={Colors.accentColor} thickness={2} padding={12}>
          <PriceContainer backgroundColor={Colors.accentColor}>
            <Regular48 color={Colors.fillColor}>{price}</Regular48>
            <Regular24 color={Colors.fillColor}>СОМ</Regular24>
          </PriceContainer>
        </Dashes>
      </Row>
    </TouchableWithoutFeedback>
  );
};

const StyledImage = styled.Image({
  width: 200,
  height: 200,
  resizeMode: 'cover',
  borderRadius: 100,
});

const PriceContainer = styled(Block)({
  borderRadius: 100,
  height: 200,
  width: 200,
  justifyContent: 'center',
  alignItems: 'center',
});
