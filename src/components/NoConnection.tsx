import React from 'react';
import {StatusBarNotification} from './StatusBarNotification';
import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Typography} from '@components';
import {Colors} from '@config';

interface NoConnectionProps {
  isVisible: boolean;
  elevation: number;
}

const NoConnectionText = styled(Typography.Regular18)`
  line-height: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: ${Colors.fillColor};
`;

export const NoConnection: React.FC<NoConnectionProps> = React.memo(
  ({isVisible, elevation}) => {
    const {t} = useTranslation();

    return (
      <StyledStatusBarNotification isVisible={isVisible} elevation={elevation}>
        <StatusBar barStyle="light-content" />
        <NoConnectionText testID="noConnectionText">
          {t('notifications.noConnection')}
        </NoConnectionText>
      </StyledStatusBarNotification>
    );
  },
);

const StyledStatusBarNotification = styled(StatusBarNotification)<{
  elevation: number;
}>(({elevation}) => ({
  backgroundColor: Colors.secondaryColor,
  elevation: `${elevation}`,
}));
