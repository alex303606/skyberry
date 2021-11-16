import {INIT_CONFIG} from '../actions/actionTypes';
import {AnyAction} from 'redux';
import {IConfigState} from '@interfaces';

const initialState: IConfigState = {
  app: {
    promoVideo: null,
    promoImage: null,
    backgroundImage: null,
  },
  socialNetworks: [],
  options: [],
  tags: [],
  languages: [],
};

export const configReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INIT_CONFIG:
      return {...state, ...action.config};
    default:
      return state;
  }
};
