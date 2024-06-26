import React from 'react';
import {useNetInfo} from '@hooks';
import {NoConnection} from './NoConnection';

export const ConnectionHandler = React.memo(() => {
  const {isInternetReachable} = useNetInfo();

  return (
    <NoConnection isVisible={isInternetReachable === false} elevation={2} />
  );
});
