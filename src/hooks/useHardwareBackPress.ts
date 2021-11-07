import {useCallback} from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useHardwareBackPress = (callback: () => boolean) => {
  useFocusEffect(
    useCallback(() => {
      const onBackButtonPressed = () => callback();

      BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);

      return () =>
        BackHandler.removeEventListener(
          'hardwareBackPress',
          onBackButtonPressed,
        );
    }, [callback]),
  );
};
