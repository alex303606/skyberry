import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import {Block} from '@components';

type IVideoPlayer = {
  videoURL: string;
  paused: boolean;
  poster?: string;
};

export const VideoPlayer: React.FC<IVideoPlayer> = ({
  videoURL,
  paused,
  poster,
}) => {
  const video = useRef<Video>(null);

  return (
    <StyledBlock flex={1}>
      <StyledVideo
        ref={video}
        source={{
          uri: videoURL,
        }}
        poster={poster}
        posterResizeMode={'cover'}
        paused={paused}
        muted={true}
        repeat={true}
        playInBackground={true}
        resizeMode="cover"
      />
    </StyledBlock>
  );
};

const StyledVideo = styled(Video)({
  ...StyleSheet.absoluteFillObject,
});

const StyledBlock = styled(Block)({
  ...StyleSheet.absoluteFillObject,
});
