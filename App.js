import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopReducer from './store/ShopReducer';
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  shoprducer: ShopReducer
});

const Store = createStore(rootReducer);


const App = () => {
  return (
    <Provider store={Store}>
      <ShopNavigator />
    </Provider>
  );
};

export default App;