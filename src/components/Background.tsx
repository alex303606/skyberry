import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '@config';

type Props = {
  children: React.ReactNode;
  image: string | null;
  showOverlay?: boolean;
};

const DefaultImage = require('@assets/images/logo.png');

export const Background: React.FC<Props> = ({
  children,
  image,
  showOverlay = true,
}) => {
  return (
    <StyledImageBackground
      blurRadius={4}
      source={
        image
          ? {
              uri: image,
            }
          : DefaultImage
      }>
      {showOverlay && <Overlay />}
      {children}
    </StyledImageBackground>
  );
};

export const StyledImageBackground = styled.ImageBackground({
  width: '100%',
  resizeMode: 'cover',
  flex: 1,
});

export const Overlay = styled.View({
  ...StyleSheet.absoluteFillObject,
  backgroundColor: Colors.overlayColor,
});
