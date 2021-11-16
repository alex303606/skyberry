import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';
import {Block, Loader} from '@components';

type IVideoPlayer = {
  videoURL: string;
  loading: boolean;
  paused: boolean;
  onLoadHandler: () => void;
  onErrorHandler: () => void;
};

export const VideoPlayer: React.FC<IVideoPlayer> = ({
  videoURL,
  onLoadHandler,
  onErrorHandler,
  loading,
  paused,
}) => {
  const video = useRef<Video>(null);

  return (
    <StyledBlock flex={1}>
      <StyledVideo
        ref={video}
        source={{
          uri: videoURL,
        }}
        onLoad={onLoadHandler}
        onError={onErrorHandler}
        paused={paused}
        muted={true}
        repeat={true}
        playInBackground={true}
        resizeMode="cover"
      />
      {loading && (
        <StyledBlock>
          <Loader />
        </StyledBlock>
      )}
    </StyledBlock>
  );
};

const StyledVideo = styled(Video)({
  ...StyleSheet.absoluteFillObject,
});

const StyledBlock = styled(Block)({
  ...StyleSheet.absoluteFillObject,
});
