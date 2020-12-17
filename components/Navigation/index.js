import React from "react";
import Home from "../Home";
import BakeryList from "../BakeryList";
import BakeryDetail from "../BakeryDetail";
import CartList from "../CartList";
import CartButton from "../buttons/CartButton";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#90d4ed",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="BakeryList"
        component={BakeryList}
        options={{
          title: "Choose a Bakery",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="BakeryDetail"
        component={BakeryDetail}
        options={({ route }) => {
          const { bakery } = route.params;
          return {
            title: bakery.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen name="Cart" component={CartList} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
