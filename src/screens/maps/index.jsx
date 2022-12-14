//React
import { useLayoutEffect, useState } from "react";

//React Native
import { TouchableOpacity } from "react-native";

//React Native Maps
import MapView, { Marker } from "react-native-maps";

//Icons from expo
import Ionicons from "@expo/vector-icons/Ionicons";

//Theme colors
import colors from "../../utils/colors";

//Styles
import { styles } from "./styles";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const initialRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const onHandlerPickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation)
      navigation.navigate("NewPlace", { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <Ionicons name="md-save-sharp" size={24} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);

  return (
    <MapView
      style={styles.container}
      initialRegion={initialRegion}
      onPress={onHandlerPickLocation}
    >
      {selectedLocation && (
        <Marker
          title="Marcar en el mapa"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Maps;
