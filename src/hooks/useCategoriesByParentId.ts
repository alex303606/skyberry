import {useSelector} from 'react-redux';
import {RootState} from 'src/store/configureStore';

export const useCategoriesByParentId = (parentCategoryId: string) => {
  return useSelector((state: RootState) =>
    state.menu.categories.filter(
      cat => cat.parent_category_id === parentCategoryId,
    ),
  );
};
