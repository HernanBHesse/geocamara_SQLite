//React
import React from "react";

//React Native
import { Platform, TouchableOpacity } from "react-native";

//Navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import {
  MapsScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlaceListScreen,
} from "../screens/index";

//Icons from expo
import Ionicons from "@expo/vector-icons/Ionicons";

//Theme colors
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.black,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Locaciones Guardadas",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color={colors.black}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles de la locación" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={{ title: "Nueva Locación" }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{ title: "Mapa" }}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
