import axios from 'axios';
import {
  Category,
  Dish,
  ICategory,
  IConfig,
  IDish,
  MainCategory,
} from '@interfaces';
import {
  INIT_CONFIG,
  INIT_DISHES,
  INIT_MAIN_CATEGORIES,
  INIT_MENU,
} from './actionTypes';
import {Dispatch} from 'redux';

type Data = {[id: string]: ICategory};

const categoryDishesMapper = (
  ruDishes?: IDish[],
  enDishes?: IDish[],
): Dish[] | undefined => {
  if (ruDishes?.length) {
    return ruDishes.map((ruDish, index) => {
      const enDish = enDishes ? enDishes[index] : undefined;
      return {
        ...ruDish,
        title: {
          ru: ruDish.title || '',
          en: enDish?.title || '',
        },
        description: {
          ru: ruDish.description || '',
          en: enDish?.description || '',
        },
        ingredients: {
          ru: ruDish.ingredients || '',
          en: enDish?.ingredients || '',
        },
      };
    });
  }
  return undefined;
};

const categoryMapper = (ruCat: ICategory, enCat: ICategory): Category => ({
  ...ruCat,
  title: {
    ru: ruCat.title || '',
    en: enCat.title || '',
  },
  description: {
    ru: ruCat.description || '',
    en: enCat.description || '',
  },
  avaliable: !!ruCat.dishes?.length,
  childCount: ruCat.dishes?.length,
  dishes: categoryDishesMapper(ruCat.dishes, enCat.dishes),
});

const reducer = (acc: Data, cat: ICategory) => {
  acc[cat.id] = {...cat};
  return acc;
};

export const initMenu = () => {
  return async (dispatch: Dispatch) => {
    try {
      const getEnCategories =
        axios.get<{categories: ICategory[]}>('cat.php?lang_id=5');
      const getRuCategories =
        axios.get<{categories: ICategory[]}>('cat.php?lang_id=4');

      const [
        {
          data: {categories: ruCat},
        },
        {
          data: {categories: enCat},
        },
      ] = await Promise.all([getRuCategories, getEnCategories]);

      const enCatData = enCat.reduce(reducer, {} as Data);
      const ruCatData = ruCat.reduce(reducer, {} as Data);

      const mappedCategories = Object.keys(ruCatData).reduce(
        (acc, key) => {
          const category = categoryMapper(ruCatData[key], enCatData[key]);
          if (category.dishes?.length) {
            acc.dishes = [...acc.dishes, ...category.dishes];
          }
          if (category.parent_category_id === '0') {
            acc.main.push(category as MainCategory);
          } else if (category.avaliable) {
            acc.categories.push(category);
          }
          return acc;
        },
        {
          main: [] as MainCategory[],
          categories: [] as Category[],
          dishes: [] as Dish[],
        },
      );

      dispatch({
        type: INIT_MAIN_CATEGORIES,
        mainCategories: mappedCategories.main,
      });
      dispatch({type: INIT_MENU, categories: mappedCategories.categories});
      dispatch({type: INIT_DISHES, dishes: mappedCategories.dishes});
    } catch (error) {
      console.warn('error init menu', error);
    }
  };
};

export const initConfig = () => {
  return (dispatch: Dispatch) => {
    return axios.get<IConfig>('/config2.json').then(
      ({data}) => {
        dispatch({type: INIT_CONFIG, config: data});
      },
      error => {
        console.warn('error config menu', error);
      },
    );
  };
};
