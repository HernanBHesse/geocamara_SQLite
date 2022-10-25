//React
import React from "react";

//React Native
import { View, Image } from "react-native";

//URL Maps
import { URL_MAPS } from "../../utils/maps";

//Styles
import { styles } from "./styles";


const MapPreview = ({ children, location, style }) => {
  const { lat, lng } = location || {};
  const mapPreviewUrl = URL_MAPS(lat, lng);
  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
};

export default MapPreview;
