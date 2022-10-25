//React Native
import { View, Text, FlatList } from "react-native";

//Redux
import { useSelector } from "react-redux";

//Component
import { PlaceItem } from "../../components";

//Theme colors
import { styles } from "./styles";


const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.empty}>No se guardaron locaciones todavía</Text>
    </View>
  );

  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PlaceList;
