import {useSelector} from 'react-redux';
import {RootState} from '@interfaces';

export const useConfig = () => {
  return {
    ...useSelector((state: RootState) => state.config),
  };
};
