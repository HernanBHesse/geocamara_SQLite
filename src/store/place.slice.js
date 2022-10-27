import * as FileSystem from "expo-file-system";

//Redux
import { createSlice } from "@reduxjs/toolkit";

//Places
import Place from "../model/Place";

//Data Base
import { insertPlace, getPlaces } from "../db";

//Maps
import { URL_GEOCODING } from "../utils/maps";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        action.payload.id,
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});


export const { addPlace, setPlaces } = placeSlice.actions;

export const savePlace = (title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

    if (!response.ok) throw new Error("Algo no funciono");

    const data = await response.json();

    if (!data.results) throw new Error("Algo no funciono");

    const address = data.results[0].formatted_address;

    try {
      const result = await insertPlace(title, image, address, coords);
      console.log(result);
      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    const result = await getPlaces();
    dispatch(setPlaces(result?.row?._array));
  };
};

export default placeSlice.reducer;
