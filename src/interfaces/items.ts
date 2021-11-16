import {IconNames} from '@components';

export interface IMainCategory {
  id: number;
  title: string;
  parent_category_id: string; //если 0, главная категория
}

export interface ICategory extends IMainCategory {
  image: string | null;
  description?: string;
  childCount?: number;
  dishes?: IDish[];
}

export type IDish = {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
};

export type ISocialNetwork = {
  id: number;
  name: string;
  icon: IconNames;
};

export type ILanguage = {
  id: number;
  lang: string;
  flagURL: string;
};

export type IOption = {
  id: number;
  icon: IconNames;
  title: string;
  value: string;
};

export type ILocation = {
  id: number;
  name: string;
  icon: IconNames;
};

export type ITag = {
  id: number;
  backgroundColor: string;
  label: string;
  icon: string;
};
