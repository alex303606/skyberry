import axios from 'axios';
import {ICategory, IConfig, IMainCategory} from '@interfaces';
import {INIT_CONFIG} from './actionTypes';
import {Dispatch} from 'redux';

export const initMenu = () => {
  return () => {
    return axios.get<{categories: ICategory[]}>('/cat.php').then(
      ({data}) => {
        const allCategories = data.categories.reduce(
          (acc, cat) => {
            if (cat.parent_category_id === '0') {
              acc.main.push(cat);
            } else {
              acc.categories.push({...cat, childCount: cat.dishes?.length});
            }
            return acc;
          },
          {
            main: [] as IMainCategory[],
            categories: [] as ICategory[],
          },
        );

        console.log(allCategories);
      },
      error => {
        console.warn('error init menu', error);
      },
    );
  };
};

export const initConfig = () => {
  return (dispatch: Dispatch) => {
    return axios.get<IConfig>('/config.json').then(
      ({data}) => {
        dispatch({type: INIT_CONFIG, config: data});
      },
      error => {
        console.warn('error init menu', error);
      },
    );
  };
};
