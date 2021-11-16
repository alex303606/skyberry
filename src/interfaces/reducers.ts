import {IConfig, IMainCategory} from '@interfaces';

export interface IConfigState extends IConfig {}

export interface IMainCategoryState {
  mainCategories: IMainCategory[];
}

export interface IMenuState {
  categories: [];
}

export interface RootState {
  menu: IMenuState;
  mainCategory: IMainCategoryState;
  config: IConfigState;
}
