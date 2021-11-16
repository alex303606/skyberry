import {EScreens, ICategory, ILocation, IDish} from '@interfaces';
import {MutableRefObject, RefObject} from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export interface INavigationService {
  navigationRef: RefObject<NavigationContainerRef>;
  isReadyRef: MutableRefObject<boolean>;
  navigate: (name: EScreens, params: {[key: string]: any}) => void;
}

export type RootStackParamList = {
  [EScreens.HOME_SCREEN]: undefined;
  [EScreens.MAIN_SCREEN]: undefined;
  [EScreens.CATEGORY_SCREEN]: {location: ILocation};
  [EScreens.MENU_SCREEN]: {category: ICategory};
  [EScreens.POSITION_DETAILS_SCREEN]: {position: IDish};
};

export type MainScreenProps = StackScreenProps<
  RootStackParamList,
  EScreens.MAIN_SCREEN
>;

export type HomeScreenProps = StackScreenProps<
  RootStackParamList,
  EScreens.HOME_SCREEN
>;

export type CategoryScreenProps = StackScreenProps<
  RootStackParamList,
  EScreens.CATEGORY_SCREEN
>;

export type MenuScreenProps = StackScreenProps<
  RootStackParamList,
  EScreens.MENU_SCREEN
>;

export type PositionsDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  EScreens.POSITION_DETAILS_SCREEN
>;
