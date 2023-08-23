import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {Colors} from '@config';
import {Block, Icon, IconNames, Row, Typography} from '@components';
import {AccompanyingPosition} from './AccompanyingPosition';
import {Dish} from '@interfaces';

const {BoldUppercase32} = Typography;

type Props = {
  positions: Dish[];
  title: string;
};

export const AccompanyingCategory: React.FC<Props> = ({positions, title}) => {
  const renderAccompanyingPosition = useCallback((position: Dish) => {
    return <AccompanyingPosition key={position.id} position={position} />;
  }, []);

  return (
    <Block marginVertical={50}>
      <Row alignItems={'center'}>
        <Block marginRight={20}>
          <Icon name={IconNames.cherry} size={30} color={Colors.white} />
        </Block>
        <BoldUppercase32 color={Colors.white} numberOfLines={1}>
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
