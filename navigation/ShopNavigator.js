import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { View } from 'react-native';
import CartScreen from '../screens/shop/CartScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import OrdersScreen from '../screens/shop/OrdersScreen';

const Stack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen
                    options={({ route, navigation }) => ({
                        headerStyle: {
                            backgroundColor: '#d12c5c',
                        },
                        headerRight: () => (
                            <View style={{ marginHorizontal: 30 }}>
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
                    options={{
                        title: "Product Detail",
                        headerStyle: {
                            backgroundColor: '#d12c5c',
                        },
                        headerTintColor: "#ffffff",
                    }}
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
                <Stack.Screen
                    options={{
                        title: "Your Orders",
                        headerStyle: {
                            backgroundColor: '#d12c5c',
                        },
                        headerTintColor: "#ffffff",
                    }}
                    name="Order"
                    component={OrdersScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;