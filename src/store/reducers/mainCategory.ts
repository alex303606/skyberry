import {IMainCategoryState} from '@interfaces';
import {INIT_MAIN_CATEGORIES} from '../actions/actionTypes';

const initialState: IMainCategoryState = {
  mainCategories: [],
};

export const mainCategoryReducer = (
  state = initialState,
  action: any,
): IMainCategoryState => {
  switch (action.type) {
    case INIT_MAIN_CATEGORIES:
      return {...state, mainCategories: action.mainCategories};
    default:
      return state;
  }
};
