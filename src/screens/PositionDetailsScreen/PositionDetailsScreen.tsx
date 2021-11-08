import React from 'react';
import {Background, Block, Row, Typography} from '@components';
import {ScrollView} from 'react-native';
import {Colors} from '@config';
import {
  PositionGallery,
  AccompanyingCategory,
  Recommendation,
  TagsComponent,
} from './components';
import {IPosition, ITag, PositionsDetailsScreenProps} from '@interfaces';
import {
  APP_BACKGROUND_IMAGE,
  PHOTOS,
  SELECTED_CATEGORY_POSITIONS,
  TAGS,
} from '../../../constans';
import {useSetScreenOptions} from '@hooks';

const thumbnailURL: string =
  'https://firebasestorage.googleapis.com/v0/b/skyberry-6250a.appspot.com/o/categories%2Fb42tgELj8Zp9ldHNV8tv.png?alt=media&token=bef56186-1092-4ca7-aa61-10990fe01653';

const {ChocolatesUppercase72, BoldCapitalize20, Polls24, RegularUpperCase72} =
  Typography;

export const PositionDetailsScreen: React.FC<PositionsDetailsScreenProps> = ({
  route: {
    params: {position},
  },
}) => {
  const selectedCategoryPosition: IPosition[] = SELECTED_CATEGORY_POSITIONS;
  const photos: string[] = PHOTOS;
  const tags: ITag[] = TAGS;

  useSetScreenOptions(
    {
      title: position.title,
    },
    [],
  );

  return (
    <Background image={APP_BACKGROUND_IMAGE} showOverlay={true}>
      <Row>
        <Block flex={3} paddingTop={100}>
          <PositionGallery thumbnailURL={thumbnailURL} photos={photos} />
        </Block>
        <Block flex={4} paddingHorizontal={20}>
          <ScrollView>
            <ChocolatesUppercase72
              marginTop={100}
              color={Colors.titleColor}
              numberOfLines={1}>
              Лагман
            </ChocolatesUppercase72>
            <BoldCapitalize20
              marginVertical={7}
              color={Colors.textColor}
              numberOfLines={1}>
              Вес: 450 Гр.
            </BoldCapitalize20>
            <BoldCapitalize20 color={Colors.textColor} marginVertical={7}>
              Говяжья вырезка, Репчатый лук, Редька, Помидор, Вода, Чеснок,
              Растительное масло, Соль, Красный жгучий перец, Свежая зелень
            </BoldCapitalize20>
            <Polls24
              color={Colors.textColor}
              marginVertical={20}
              paddingRight={'20%'}>
              Легенда о появлении лагмана дошла до нас из Древнего Китая. На
              перекрестке встретились три голодных путника. У одного были мясо и
              мука, у другого вода и сковорода, у третьего овощи и травы. Они
              решили вместе сварить одно блюдо на всех. Так появился вкусный и
              простой лагман. Конечно, рецепт лагмана в домашних условиях
              менялся: например, в него добавляли больше овощей, специй. В любом
              случае, сейчас его можно приготовить ничуть не хуже, чем в Древнем
              Китае.
            </Polls24>
            <TagsComponent tags={tags} />
            <Row marginVertical={20}>
              <RegularUpperCase72
                marginRight={20}
                color={Colors.secondaryColor}
                numberOfLines={1}>
                Цена: 200 сом
              </RegularUpperCase72>
            </Row>
            <AccompanyingCategory
              title={'Сопровождающая позиция'}
              positions={selectedCategoryPosition}
            />
            <Recommendation
              recommendationTitle={'Рекомендации'}
              title={'Салаты'}
              description={
                'Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.'
              }
              thumbnailURL={thumbnailURL}
            />
          </ScrollView>
        </Block>
      </Row>
    </Background>
  );
};
