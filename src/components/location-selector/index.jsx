//React
import React, { useState, useEffect } from "react";

//React Native
import { View, Text, Alert, TouchableOpacity } from "react-native";

//Expo Location
import * as Location from "expo-location";

//Navigator
import { useNavigation, useRoute } from "@react-navigation/native";

//Component
import MapPreview from "../map-preview";

//Icons from expo
import { FontAwesome } from "@expo/vector-icons";

//Styles
import { styles } from "./styles";

const LocationSelector = ({ onLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);
  const mapLocation = route?.params?.mapLocation;

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Necesitas habilitar los permisos del gps", [{ text: "✔️" }]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    onLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const onHandlerPickMap = async () => {
    const isLocationPermissionGranted = await verifyPermissions();

    if (!isLocationPermissionGranted) return;

    navigation.navigate("Maps");
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text>Aun no hay alguna locación</Text>
      </MapPreview>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.mapsButton} onPress={onHandlerLocation}>
          <FontAwesome name="map-marker" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onHandlerPickMap}>
          <FontAwesome name="map-pin" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationSelector;
