import React, {useCallback} from 'react';
import {Row} from '@components';
import {LocationItem} from './LocationItem';
import {ILocation} from '@interfaces';

type Props = {
  locations: ILocation[];
  onSelectCategory: (location: ILocation) => void;
};

export const Locations: React.FC<Props> = ({locations, onSelectCategory}) => {
  const renderItem = useCallback(
    (location: ILocation) => (
      <LocationItem
        onPress={onSelectCategory}
        key={location.name}
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
