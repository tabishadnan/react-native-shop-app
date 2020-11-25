import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';

const Stack = createStackNavigator();

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Products">
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: '#d12c5c',
                        },
                        headerTintColor: "#ffffff",
                    }}
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default ShopNavigator;