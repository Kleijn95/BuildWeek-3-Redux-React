import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";

const rootReducer = combineReducers({
  myprofile: profileReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
