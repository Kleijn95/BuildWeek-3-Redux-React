import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import asideReducer from "../reducers/asideReducer";
import ExperienceReducer from "../reducers/experienceReducer";
import utenteReducer from "../reducers/utenteReducer";

const rootReducer = combineReducers({
  myprofile: profileReducer,
  aside: asideReducer,
  experience: ExperienceReducer,
  utente: utenteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
