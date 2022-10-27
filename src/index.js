//Data Base
import { init } from "./db";

//Redux
import { Provider } from "react-redux";
import { store } from "./store";

//Navigation
import AppNavigator from "./navigation/index";

export default function App() {
  init()
    .then(() => {
      console.log("Base de datos cargada");
    })
    .catch((err) => {
      console.log("Falla en la carga de la base de datos");
      console.log(err);
    });

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
