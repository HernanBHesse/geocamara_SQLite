//React
import React, { useState } from "react";

//React Native
import {
  View,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";

//Redux
import { useDispatch } from "react-redux";

//Component
import { ImageSelector, LocationSelector } from "../../components";

//Store
import { savePlace } from "../../store/place.slice";

//Theme colors
import colors from "../../utils/colors";

//Styles
import { styles } from "./styles";

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(savePlace(title, image, location));
    navigation.navigate("Places");
  };

  const onHandlerImage = (imageUri) => {
    setImage(imageUri);
  };

  const onHandlerLocation = (location) => {
    setLocation(location);
  };

  return (
    <KeyboardAvoidingView behavior={"height"} style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Ingrese nombre de la locación"
            onChangeText={onHandleChange}
            value={title}
          />
          <ImageSelector onImage={onHandlerImage} />
          <LocationSelector onLocation={onHandlerLocation} />
          <Button
            title="Salvar locación"
            onPress={onHandleSubmit}
            color={colors.confirmButton}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPlace;
