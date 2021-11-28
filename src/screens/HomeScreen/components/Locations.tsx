import React, {useCallback} from 'react';
import {Row} from '@components';
import {LocationItem} from './LocationItem';
import {MainCategory} from '@interfaces';

type Props = {
  locations: MainCategory[];
  onSelectCategory: (location: MainCategory) => void;
};

export const Locations: React.FC<Props> = ({locations, onSelectCategory}) => {
  const renderItem = useCallback(
    (location: MainCategory) => (
      <LocationItem
        onPress={onSelectCategory}
        key={location.id}
        location={location}
      />
    ),
    [onSelectCategory],
  );

  return (
    <Row marginBottom={30} justifyContent={'space-between'}>
      {locations.map(renderItem)}
    </Row>
  );
};
