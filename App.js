import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ShopReducer from './store/ShopReducer';
import ShopNavigator from './navigation/ShopNavigator'; 
import CartReducer from './store/CartReducer';
import OrderReducer from './store/OrderReducer';
import DrawerNavigation from './navigation/DrawerNavigation';

const rootReducer = combineReducers({
  shoprducer: ShopReducer,
  cartreducer: CartReducer,
  orderreducer: OrderReducer,
});

const Store = createStore(rootReducer);


const App = () => {
  return (
    <Provider store={Store}>
      <DrawerNavigation />
    </Provider>
  );
};

export default App;