import React, {useCallback} from 'react';
import {Dimensions} from 'react-native';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {Block, IconNames, Typography, Dashes, Button} from '@components';
import {ICategory} from '@interfaces';

const {BoldUppercase55, Polls20} = Typography;
const DefaultImage = require('@assets/images/logo.png');

const {height} = Dimensions.get('screen');
const IMAGE_SIZE = height * 0.85;
const IMAGE_MARGIN = -IMAGE_SIZE * 0.3;

type Props = {
  item: ICategory;
  onSelect: (item: ICategory) => void;
};

export const Category: React.FC<Props> = ({item, onSelect}) => {
  const {description, thumbnailURL, title} = item;
  const onSelectHandler = useCallback(() => {
    onSelect(item);
  }, [item, onSelect]);

  return (
    <Container justifyContent={'center'} alignItems={'flex-end'}>
      <Background>
        <Dashes color={Colors.accentColor} padding={200}>
          <StyledImage
            source={thumbnailURL ? {uri: thumbnailURL} : DefaultImage}
          />
        </Dashes>
      </Background>
      <Block marginRight={40}>
        <Width400>
          {!!title && (
            <BoldUppercase55
              numberOfLines={1}
              textAlign={'left'}
              color={Colors.titleColor}>
              {title}
            </BoldUppercase55>
          )}
          {!!description && (
            <Polls20 color={Colors.textColor} marginVertical={20}>
              {description}
            </Polls20>
          )}
        </Width400>
        <Button
          iconName={IconNames.menu}
          title="Перейти в меню"
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
