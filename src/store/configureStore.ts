import {applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {
  menuReducer,
  mainCategoryReducer,
  configReducer,
  dishesReducer,
} from './reducers';

const middlewares = [thunkMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
// @ts-ignore
const enhancers = applyMiddleware.apply({}, middlewares);

const appReducer = combineReducers({
  menu: menuReducer,
  mainCategory: mainCategoryReducer,
  config: configReducer,
  dishes: dishesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, appReducer);
export type RootState = ReturnType<typeof appReducer>;
export default () => {
  let store = createStore(persistedReducer, enhancers);
  let persistor = persistStore(store);
  return {store, persistor};
};
