import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Block} from '@components';
import {PositionGalleryItem} from './PositionGalleryItem';
import {useImageUrl} from '@hooks';

type Props = {
  photos: string[] | null;
};

export const PositionGallery: React.FC<Props> = ({photos}) => {
  const [activePhoto, setActivePhoto] = useState(
    photos?.length ? photos[0] : null,
  );
  const activePhotoUri = useImageUrl(activePhoto);

  const renderPhoto = useCallback(
    (photo: string) => (
      <PositionGalleryItem
        key={photo}
        photo={photo}
        active={photo === activePhoto}
        setActivePhoto={setActivePhoto}
      />
    ),
    [activePhoto],
  );

  return (
    <Block>
      {photos?.length && photos.length > 1 ? (
        <>
          <StyledImage source={activePhotoUri} />
          <StyledScrollView horizontal>
            {photos.map(renderPhoto)}
          </StyledScrollView>
        </>
      ) : (
        <StyledImage source={activePhotoUri} />
      )}
    </Block>
  );
};

const StyledScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    padding: 20,
  },
}))({});

const StyledImage = styled.Image({
  width: '100%',
  height: 500,
  resizeMode: 'contain',
});
