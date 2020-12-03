import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator, OrdertStackNavigator } from "./ShopNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="All Products" component={MainStackNavigator} />
        <Drawer.Screen name="Order" component={OrdertStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;