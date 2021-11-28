import {IMenuState} from '@interfaces';
import {INIT_MENU} from '../actions/actionTypes';

const initialState: IMenuState = {
  categories: [],
};

export const menuReducer = (state = initialState, action: any): IMenuState => {
  switch (action.type) {
    case INIT_MENU:
      return {...state, categories: action.categories};
    default:
      return state;
  }
};
