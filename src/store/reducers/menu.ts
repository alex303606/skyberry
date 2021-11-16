import {IMenuState} from '@interfaces';

const initialState: IMenuState = {
  categories: [],
};

export const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
