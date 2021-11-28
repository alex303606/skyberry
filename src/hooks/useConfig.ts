import {useSelector} from 'react-redux';
import {RootState} from 'src/store/configureStore';

export const useConfig = () => {
  return {
    ...useSelector((state: RootState) => state.config),
  };
};
