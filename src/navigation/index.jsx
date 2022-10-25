//React
import React from "react";

//React Native
import { NavigationContainer } from "@react-navigation/native";

//Navigator Stack
import PlacesNavigator from "./places";

export default () => (
  <NavigationContainer>
    <PlacesNavigator />
  </NavigationContainer>
);
