import {IMainCategoryState} from '@interfaces';

const initialState: IMainCategoryState = {
  mainCategories: [],
};

export const mainCategoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
