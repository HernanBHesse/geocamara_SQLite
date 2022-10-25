import { StyleSheet } from "react-native";

//Theme colors
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 180,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 10,
  },
});
