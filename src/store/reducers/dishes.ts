import {IDishesState} from '@interfaces';
import {INIT_DISHES} from '../actions/actionTypes';

const initialState: IDishesState = {
  dishes: [],
};

export const dishesReducer = (
  state = initialState,
  action: any,
): IDishesState => {
  switch (action.type) {
    case INIT_DISHES:
      return {...state, dishes: action.dishes};
    default:
      return state;
  }
};
