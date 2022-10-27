//React
import React, { useState } from "react";

//React Native
import { View, Text, Image, Button, Alert } from "react-native";

//Expo
import * as ImagePicker from "expo-image-picker";

//Therme colors
import colors from "../../utils/colors";

//Styles
import { styles } from "./styles";

const ImageSelector = ({ onImage }) => {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Necesitas habilitar los permisos de la camera", [
        { text: "✔️" },
      ]);
      return false;
    }
    return true;
  };

  const onHandleTakePhoto = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>Aun no tomaste una foto</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button
        title="Tomar foto"
        color={colors.secondary}
        onPress={onHandleTakePhoto}
      />
    </View>
  );
};

export default ImageSelector;
