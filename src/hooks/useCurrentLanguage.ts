import {useTranslation} from 'react-i18next';

enum Lang {
  ru = 'ru',
  en = 'en',
}

type ILang = {[key: string]: string};

const languagesMap: ILang = {
  'ru-RU': 'ru',
  'en-EN': 'en',
  ru: 'ru',
  en: 'en',
};

type Translations =
  | {
      title?: {
        ru: string;
        en: string;
      };
      description?: {
        ru: string;
        en: string;
      };
      ingredients?: {
        ru: string;
        en: string;
      };
    }
  | undefined;

export const useCurrentLanguage = (translations: Translations) => {
  const {i18n} = useTranslation();
  if (!translations) {
    return {
      title: '',
      description: '',
      ingredients: '',
    };
  }
  const {title, description, ingredients} = translations;
  const currentLang = languagesMap[i18n.language] as Lang;
  return {
    title: title ? title[currentLang] : '',
    description: description ? description[currentLang] : '',
    ingredients: ingredients ? ingredients[currentLang] : '',
  };
};
