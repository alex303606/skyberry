import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

type Props = {
  children: React.ReactNode;
  image: string;
  showOverlay?: boolean;
};

export const Background: React.FC<Props> = ({
  children,
  image,
  showOverlay = true,
}) => {
  return (
    <StyledImageBackground
      blurRadius={4}
      source={{
        uri: image,
      }}>
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
  backgroundColor: 'rgba(16, 14, 14, 0.3)',
});
