/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Root} from '@navigators';
import {Provider} from 'react-redux';
import {Text, StatusBar} from 'react-native';
import configureStore from './store/configureStore';
import {Loader, ConnectionHandler} from '@components';
import {Colors} from '@config';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {PresentationDependencies} from '@interfaces';
import {UIDependenciesServiceLocator, DependenciesContext} from '@utils';

// @ts-ignore
if (Text && !Text.defaultProps) {
  // @ts-ignore
  Text.defaultProps = {};
  // @ts-ignore
  Text.defaultProps.allowFontScaling = false;
}

enableScreens();

const {persistor, store} = configureStore();

const getMainComponent = (deps: PresentationDependencies) => {
  const MainComponent: React.FC = () => {
    const {navigationService} = deps;

    return (
      <DependenciesContext.Provider
        value={UIDependenciesServiceLocator.init(deps)}>
        <Provider store={store}>
          <PersistGate
            loading={<Loader color={Colors.white} />}
            persistor={persistor}>
            <SafeAreaProvider>
              <NavigationContainer
                ref={navigationService.navigationRef}
                onReady={() => {
                  navigationService.isReadyRef.current = true;
                }}
                fallback={<Text>Loading...</Text>}>
                <StatusBar
                  hidden
                  barStyle={'dark-content'}
                  backgroundColor={Colors.white}
                />
                <ConnectionHandler />
                <Root />
              </NavigationContainer>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </DependenciesContext.Provider>
    );
  };

  return MainComponent;
};

export const init = (dependencies: PresentationDependencies) =>
  getMainComponent(dependencies);
