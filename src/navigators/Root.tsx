import React, {useEffect} from 'react';
import {EScreens, RootStackParamList} from '@interfaces';
import {createStackNavigator} from '@react-navigation/stack';
import {useLoading} from '@hooks';
import {Header, Loader} from '@components';
import {Colors} from '@config';
import {
  HomeScreen,
  MainScreen,
  CategoryScreen,
  MenuScreen,
  PositionDetailsScreen,
} from '@screens';
import {useDispatch} from 'react-redux';
import {fetchMenu, initMenu} from '@actions';
const Stack = createStackNavigator<RootStackParamList>();

type Props = {};

export const Root: React.FC<Props> = () => {
  const {loading} = useLoading();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initMenu());
    dispatch(fetchMenu());
  }, [dispatch]);
  if (loading) {
    return <Loader color={Colors.white} />;
  }

  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName={EScreens.MAIN_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={EScreens.MAIN_SCREEN}
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EScreens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={EScreens.MENU_SCREEN}
        component={MenuScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: Header,
        }}
      />
      <Stack.Screen
        name={EScreens.POSITION_DETAILS_SCREEN}
        component={PositionDetailsScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: Header,
        }}
      />
      <Stack.Screen
        name={EScreens.CATEGORY_SCREEN}
        component={CategoryScreen}
        options={{
          headerShown: true,
          headerTransparent: true,
          header: Header,
        }}
      />
    </Stack.Navigator>
  );
};
