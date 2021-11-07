import {I18nextClient} from '../localization/I18nextClient';
import {NetInfo} from '@interfaces';
import {Permissions} from './Permissions';
import {NavigationService} from './NavigationService';

export const getInfrastructureContainer = async () => {
  const localization = new I18nextClient();
  const netInfo = NetInfo;
  const permissions = new Permissions();
  const navigationService = new NavigationService();
  await localization.init();

  return {
    infrastructureContainer: {
      netInfo,
      navigationService,
      permissions,
    },
  };
};
