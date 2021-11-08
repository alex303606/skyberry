import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';

export const VideoPlayer: React.FC<{videoURL: string}> = ({videoURL}) => {
  const video = useRef<Video>(null);
  return (
    <StyledVideo
      ref={video}
      source={{
        uri: videoURL,
      }}
      paused={false}
      //fullscreen={true}
      muted={true}
      repeat={true}
      playInBackground={true}
      resizeMode="cover"
    />
  );
};

const StyledVideo = styled(Video)({
  ...StyleSheet.absoluteFillObject,
});
