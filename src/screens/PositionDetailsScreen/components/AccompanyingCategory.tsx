import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {Colors} from '@config';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import {AccompanyingPosition} from './AccompanyingPosition';
import {IDish} from '@interfaces';

const {BoldUppercase32} = Typography;

type Props = {
  positions: IDish[];
  title: string;
};

export const AccompanyingCategory: React.FC<Props> = ({positions, title}) => {
  const renderAccompanyingPosition = useCallback(
    (position: IDish) => (
      <AccompanyingPosition
        key={position.id}
        title={position.title}
        thumbnailURL={position.images[0]}
      />
    ),
    [],
  );

  return (
    <Block marginVertical={50}>
      <Row alignItems={'center'}>
        <Block marginRight={20}>
          <Icon name={IconNames.cherry} size={30} color={Colors.titleColor} />
        </Block>
        <BoldUppercase32 color={Colors.titleColor} numberOfLines={1}>
          {title}
        </BoldUppercase32>
      </Row>
      <Row paddingVertical={30}>
        <ScrollView horizontal>
          {positions.map(renderAccompanyingPosition)}
        </ScrollView>
      </Row>
    </Block>
  );
};
