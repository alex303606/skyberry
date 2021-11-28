import {useSelector} from 'react-redux';
import {RootState} from '../../../store/configureStore';

export const useMainCategories = () => {
  return {
    ...useSelector((state: RootState) => state.mainCategory),
  };
};
