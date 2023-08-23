import React, {useCallback} from 'react';
import {Dimensions} from 'react-native';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {Block, IconNames, Typography, Dashes, Button} from '@components';
import type {Category} from '@interfaces';
import {useCategoryImageUrl, useCurrentLanguage} from '@hooks';
import {useTranslation} from 'react-i18next';

const {Polls20} = Typography;
const {height} = Dimensions.get('screen');
const IMAGE_SIZE = height * 0.85;
const IMAGE_MARGIN = -IMAGE_SIZE * 0.3;

type Props = {
  item: Category;
  onSelect: (item: Category) => void;
};

export const CategoryItem: React.FC<Props> = ({item, onSelect}) => {
  const {image} = item;
  const source = useCategoryImageUrl(image);
  const {description} = useCurrentLanguage(item);
  const {t} = useTranslation();
  const onSelectHandler = useCallback(() => {
    onSelect(item);
  }, [item, onSelect]);

  return (
    <Container justifyContent={'center'} alignItems={'flex-end'}>
      <Background>
        <Dashes color={Colors.accentColor} padding={200}>
          <StyledImage source={source} />
        </Dashes>
      </Background>
      <Block marginRight={40}>
        <Width400>
          {!!description && (
            <Polls20 color={Colors.white} marginVertical={20}>
              {description}
            </Polls20>
          )}
        </Width400>
        <Button
          iconName={IconNames.menu}
          title={t('goToMenu')}
          onPress={onSelectHandler}
        />
      </Block>
    </Container>
  );
};

const Container = styled(Block)({
  overflow: 'hidden',
  minHeight: height,
});

const Width400 = styled(Block)({
  width: 400,
});

const StyledImage = styled.Image({
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  resizeMode: 'contain',
  margin: IMAGE_MARGIN,
});

const Background = styled.View({
  position: 'absolute',
  left: '-60%',
});
