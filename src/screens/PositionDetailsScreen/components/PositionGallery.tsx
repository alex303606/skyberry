import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {Block} from '@components';
import {PositionGalleryItem} from './PositionGalleryItem';
const DefaultImage = require('@assets/images/logo.png');

type Props = {
  thumbnailURL: string;
  photos: string[];
};

export const PositionGallery: React.FC<Props> = ({thumbnailURL, photos}) => {
  const [activePhoto, setActivePhoto] = useState<string>(photos[0]);

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
      {photos.length ? (
        <>
          <StyledImage
            source={{
              uri: activePhoto,
            }}
          />
          <StyledScrollView horizontal>
            {photos.map(renderPhoto)}
          </StyledScrollView>
        </>
      ) : (
        <StyledImage
          source={thumbnailURL ? {uri: thumbnailURL} : DefaultImage}
        />
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
