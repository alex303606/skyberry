import {IconNames} from '@components';

// Катерии полученные с сервера
export interface ICategory {
  id: string;
  title: string | null;
  icon?: IconNames;
  parent_category_id: string; //если 0, главная категория
  image: string | null;
  description?: string | null;
  childCount?: number;
  dishes?: IDish[];
}

export interface Category {
  id: string;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  parent_category_id: string; //если 0, главная категория
  image: string | null;
  childCount?: number;
  dishes?: Dish[];
  avaliable: boolean;
}

export interface MainCategory extends Category {
  icon: IconNames;
}

// Блюда полученные с сервера
export type IDish = {
  id: number;
  title: string | null;
  ingredients: string | null;
  description: string | null;
  price: number;
  images: string[];
};

export type Dish = {
  id: number;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  ingredients: {
    ru: string;
    en: string;
  };
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

export type ITag = {
  id: number;
  backgroundColor: string;
  label: string;
  icon: string;
};
