import React, {useCallback} from 'react';
import {Row} from '@components';
import {FooterItem} from './FooterItem';
import {IOption} from '@interfaces';

type Props = {
  options: IOption[];
};

export const Footer: React.FC<Props> = ({options}) => {
  const renderItem = useCallback(
    (item: IOption) => <FooterItem key={item.id} option={item} />,
    [],
  );
  return (
    <Row marginBottom={30} justifyContent={'space-between'}>
      {options.map(renderItem)}
    </Row>
  );
};
