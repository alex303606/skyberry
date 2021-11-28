import {Category, Dish, IConfig, MainCategory} from '@interfaces';

export interface IConfigState extends IConfig {}

export interface IMainCategoryState {
  mainCategories: MainCategory[];
}

export interface IMenuState {
  categories: Category[];
}

export interface IDishesState {
  dishes: Dish[];
}
