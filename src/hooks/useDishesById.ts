import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';

export const useDishesById = (ids: string[]) => {
  return useSelector((state: RootState) =>
    state.dishes.dishes.filter(cat => ids.includes(cat.id)),
  );
};
