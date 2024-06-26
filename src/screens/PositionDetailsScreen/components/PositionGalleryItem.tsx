import React, {useCallback} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import {Block} from '@components';
import {Colors} from '@config';
import {useImageUrl} from '@hooks';

type Props = {
  photo: string;
  setActivePhoto: (photo: string) => void;
  active: boolean;
};

export const PositionGalleryItem: React.FC<Props> = ({
  photo,
  setActivePhoto,
  active,
}) => {
  const image = useImageUrl(photo);

  const setActiveHandler = useCallback(
    () => setActivePhoto(photo),
    [photo, setActivePhoto],
  );

  return (
    <TouchableWithoutFeedback key={photo} onPress={setActiveHandler}>
      <Photo active={active} marginRight={15}>
        <StyledPhoto source={image} />
      </Photo>
    </TouchableWithoutFeedback>
  );
};

const StyledPhoto = styled.Image({
  width: 100,
  height: 100,
  resizeMode: 'cover',
});

const Photo = styled(Block)<{
  active: boolean;
}>(({active}) => ({
  borderBottomWidth: active ? 2 : 0,
  paddingBottom: active ? 10 : 0,
  borderColor: Colors.accentColor,
}));
