import {ILanguage, IOption, ISocialNetwork, ITag} from './items';

export interface IConfig {
  app: {
    promoVideo: string | null;
    promoImage: string | null;
    backgroundImage: string | null;
  };
  socialNetworks: ISocialNetwork[];
  options: IOption[];
  tags: ITag[];
  languages: ILanguage[];
}
