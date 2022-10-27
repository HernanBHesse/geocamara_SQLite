//React
import React from "react";

//React Native
import { View, Image, TouchableOpacity, Text } from "react-native";

//styles
import { styles } from "./styles";

const PlaceItem = ({ title, image, address, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
