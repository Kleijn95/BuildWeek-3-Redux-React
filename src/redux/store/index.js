import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import asideReducer from "../reducers/asideReducer";

const rootReducer = combineReducers({
  myprofile: profileReducer,
  aside: asideReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
