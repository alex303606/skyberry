import React, {useCallback} from 'react';
import {Row, Icon, Typography, Block} from '@components';
import {Colors} from '@config';
import styled from 'styled-components/native';
import {ISocialNetwork} from '@interfaces';
const {Regular18} = Typography;

type Props = {
  socialNetworks: ISocialNetwork[];
};

export const SocialNetworks: React.FC<Props> = ({socialNetworks}) => {
  const renderItem = useCallback(
    ({icon}: ISocialNetwork) => (
      <Block marginHorizontal={20}>
        <Icon name={icon} color={Colors.white} size={30} />
      </Block>
    ),
    [],
  );

  return (
    <Block marginHorizontal={80} alignItems={'center'}>
      <Row marginBottom={20}>{socialNetworks.map(renderItem)}</Row>
      <Regular18 marginLeft={15} color={Colors.white}>
        @skyberry.kg
      </Regular18>
    </Block>
  );
};
