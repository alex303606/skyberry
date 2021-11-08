import React from 'react';
import {Colors} from '@config';
import {Block, Typography} from '@components';
import styled from 'styled-components/native';
const DefaultImage = require('@assets/images/logo.png');

const {Chocolates20} = Typography;

type Props = {
  thumbnailURL: string;
  title: string;
};

export const AccompanyingPosition: React.FC<Props> = ({
  thumbnailURL,
  title,
}) => {
  return (
    <Block alignItems={'center'} marginHorizontal={20}>
      <StyledImage source={thumbnailURL ? {uri: thumbnailURL} : DefaultImage} />
      <StyledChocolatesRegular20 color={Colors.secondaryColor}>
        {title}
      </StyledChocolatesRegular20>
    </Block>
  );
};

export const StyledChocolatesRegular20 = styled(Chocolates20)({
  borderBottomWidth: 2,
  borderBottomColor: Colors.accentColor,
});

export const StyledImage = styled.Image({
  width: 100,
  height: 100,
  borderRadius: 100,
  marginBottom: 20,
});
