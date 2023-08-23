import React from 'react';
import {Colors} from '@config';
import {Block, Typography} from '@components';
import styled from 'styled-components/native';
import {useCurrentLanguage, useImageUrl} from '@hooks';
import {Dish} from '@interfaces';

const {Chocolates20} = Typography;

type Props = {
  position: Dish;
};

export const AccompanyingPosition: React.FC<Props> = ({position}) => {
  const {title} = useCurrentLanguage(position);
  const image = useImageUrl(
    position.images?.length ? position.images[0] : null,
  );
  return (
    <Block alignItems={'center'} marginHorizontal={20}>
      <StyledImage source={image} />
      <StyledChocolatesRegular20 color={Colors.white}>
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
