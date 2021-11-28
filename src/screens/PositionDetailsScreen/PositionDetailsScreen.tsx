import React from 'react';
import {Background, Block, Row, Typography} from '@components';
import {ScrollView} from 'react-native';
import {Colors} from '@config';
import {
  PositionGallery,
  AccompanyingCategory,
  TagsComponent,
} from './components';
import {PositionsDetailsScreenProps} from '@interfaces';
import {
  useConfig,
  useCurrentLanguage,
  useDishesById,
  useGetOptions,
  useSetScreenOptions,
} from '@hooks';
import {useTranslation} from 'react-i18next';

const {ChocolatesUppercase72, BoldCapitalize20, Polls24, RegularUpperCase72} =
  Typography;

export const PositionDetailsScreen: React.FC<PositionsDetailsScreenProps> = ({
  route: {
    params: {positionId},
  },
}) => {
  const {t} = useTranslation();
  const [dish] = useDishesById([positionId]);
  const recommendedProducts = useDishesById(dish.recommended_products || []);
  const options = useGetOptions(dish.options);
  const {title, description, ingredients} = useCurrentLanguage(dish);
  const weight = parseInt(dish.weight, 10);
  const price = parseInt(dish.price, 10);
  const {
    app: {backgroundImage},
  } = useConfig();
  useSetScreenOptions(
    {
      title,
    },
    [],
  );

  return (
    <Background image={backgroundImage} showOverlay={true}>
      <Row>
        <Block flex={3} paddingTop={100}>
          <PositionGallery photos={dish.images} />
        </Block>
        <Block flex={4} paddingHorizontal={20}>
          <ScrollView>
            <ChocolatesUppercase72
              marginTop={100}
              color={Colors.titleColor}
              numberOfLines={1}>
              {title}
            </ChocolatesUppercase72>
            {weight && (
              <BoldCapitalize20
                marginVertical={7}
                color={Colors.textColor}
                numberOfLines={1}>
                Вес: {weight} Гр.
              </BoldCapitalize20>
            )}
            <BoldCapitalize20 color={Colors.textColor} marginVertical={7}>
              {ingredients}
            </BoldCapitalize20>
            <Polls24
              color={Colors.textColor}
              marginVertical={20}
              paddingRight={'20%'}>
              {description}
            </Polls24>
            {!!options.length && <TagsComponent tags={options} />}
            <Row marginVertical={20}>
              <RegularUpperCase72
                marginRight={20}
                color={Colors.secondaryColor}
                numberOfLines={1}>
                Цена: {price} сом
              </RegularUpperCase72>
            </Row>
            {recommendedProducts?.length && (
              <AccompanyingCategory
                title={t('recommendedProducts')}
                positions={recommendedProducts}
              />
            )}
          </ScrollView>
        </Block>
      </Row>
    </Background>
  );
};
