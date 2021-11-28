import {useSelector} from 'react-redux';
import {RootState} from '../../../store/configureStore';

export const useCategoriesById = (id: string) => {
  return useSelector((state: RootState) =>
    state.menu.categories.find(cat => cat.id === id),
  );
};
