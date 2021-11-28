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

export const useCurrentLanguage = () => {
  const {i18n} = useTranslation();
  return languagesMap[i18n.language] as Lang;
};
