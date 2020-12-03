import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { View } from 'react-native';
import CartScreen from '../screens/shop/CartScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrdersScreen from '../screens/shop/OrdersScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen
            options={({ route, navigation }) => ({
                title: "All Product",
                headerTitleStyle : {
                    textAlign:"center",
                },
                headerStyle: {
                    backgroundColor: '#d12c5c',
                },
                headerLeft: () => (
                    <View style={{ paddingLeft: 30 }}>
                        <Icon name="bars"
                            size={22}
                            color="#FFFFFF"
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                ),
                headerRight: () => (
                    <View style={{ paddingRight: 30 }}>
                        <Icon name="shopping-cart"
                            size={22}
                            color="#FFFFFF"
                            onPress={() => navigation.navigate('Cart')}
                        />
                    </View>
                ),
                headerTintColor: "#ffffff",
            })}
            name="All Products"
            component={ProductOverviewScreen}
        />
        <Stack.Screen
            options={({ route, navigation }) => ({
                title: "Product Detail",
                headerRight: () => (
                    <View style={{ paddingRight: 30 }}>
                        <Icon name="shopping-cart"
                            size={22}
                            color="#FFFFFF"
                            onPress={() => navigation.navigate('Cart')}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#d12c5c',
                },
                headerTintColor: "#ffffff",
            })}
            name="Product Detail"
            component={ProductDetailScreen}
        />
        <Stack.Screen
            options={{
                title: "Cart",
                headerStyle: {
                    backgroundColor: '#d12c5c',
                },
                headerTintColor: "#ffffff",
            }}
            name="Cart"
            component={CartScreen}
        />
    </Stack.Navigator>
    );
  }
  
  const OrdertStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
            options={({ route, navigation }) => ({
                title: "Your Orders",
                headerStyle: {
                    backgroundColor: '#d12c5c',
                },
                headerTintColor: "#ffffff",
                headerLeft: () => (
                    <View style={{ paddingLeft: 30 }}>
                        <Icon name="bars"
                            size={22}
                            color="#FFFFFF"
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                ),
            })}
            name="Order"
            component={OrdersScreen}
        />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, OrdertStackNavigator };