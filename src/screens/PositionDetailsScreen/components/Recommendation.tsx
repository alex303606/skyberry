import React, {useCallback} from 'react';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
const DefaultImage = require('@assets/images/logo.png');

type Props = {
  thumbnailURL: string;
  recommendationTitle: string;
  description: string;
  title: string;
};

const {BoldUppercase32, Polls20, RegularLowercase20} = Typography;

export const Recommendation: React.FC<Props> = ({
  thumbnailURL,
  recommendationTitle,
  description,
  title,
}) => {
  const goTo = useCallback(() => null, []);

  return (
    <Block paddingBottom={100}>
      <Row>
        <Icon name={IconNames.recommended} size={45} color={Colors.white} />
        <BoldUppercase32 color={Colors.white} numberOfLines={1} marginLeft={20}>
          {recommendationTitle}
        </BoldUppercase32>
      </Row>
      <Row marginVertical={30} alignItems={'center'}>
        <StyledImage
          source={thumbnailURL ? {uri: thumbnailURL} : DefaultImage}
        />
        <Block paddingHorizontal={20} flex={1}>
          <BoldUppercase32
            numberOfLines={1}
            color={Colors.white}
            marginBottom={10}>
            {title}
          </BoldUppercase32>
          <Row>
            <Polls20 color={Colors.white}>{description}</Polls20>
          </Row>
        </Block>
      </Row>
      <Row>
        <Wrapper
          borderColor={Colors.accentColor}
          backgroundColor={Colors.accentColor}>
          <StyledPressable onPress={goTo}>
            <RegularLowercase20 color={Colors.red}>Перейти</RegularLowercase20>
          </StyledPressable>
        </Wrapper>
        <Wrapper borderColor={Colors.accentColor}>
          <StyledPressable onPress={goTo}>
            <RegularLowercase20 color={Colors.white}>
              Посмотреть все
            </RegularLowercase20>
          </StyledPressable>
        </Wrapper>
      </Row>
    </Block>
  );
};

const StyledPressable = styled.Pressable.attrs(() => ({
  android_ripple: {
    borderless: false,
    color: Colors.white,
  },
}))(() => ({
  paddingVertical: 10,
  paddingHorizontal: 50,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledImage = styled.Image({
  width: 250,
  height: 250,
  resizeMode: 'contain',
});

const Wrapper = styled.View<{borderColor?: string; backgroundColor?: string}>(
  ({borderColor, backgroundColor}) => ({
    borderRadius: 80,
    overflow: 'hidden',
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: borderColor || Colors.transparent,
    backgroundColor: backgroundColor || Colors.transparent,
  }),
);
