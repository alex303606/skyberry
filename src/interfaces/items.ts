import {IconNames} from '@components';

export type ICategory = {
  id: number;
  title: string;
  description: string;
  childCount: number;
  thumbnailURL: string;
};

export type IPosition = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnailURL: string;
};

export type ISocialNetwork = {
  name: string;
  icon: IconNames;
};

export type ILanguage = {
  lang: string;
  flagURL: string;
};

export type IOption = {
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
};
