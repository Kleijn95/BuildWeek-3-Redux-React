import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import asideReducer from "../reducers/asideReducer";
import ExperienceReducer from "../reducers/experienceReducer";
import utenteReducer from "../reducers/utenteReducer";
import UtenteExperienceReducer from "../reducers/utenteExperienceReducer";
import educationReducer from "../reducers/educationReducer";
import HomePostReducer from "../reducers/homePostReducer";
import createPostReducer from "../reducers/createPostReducer";
import jobReducer from "../reducers/jobsReducer";
import companyReducer from "../reducers/companyReducer";
import jobsByCategoryReducer from "../reducers/JobByCategoryReducer";
import jobSearchReducer from "../reducers/jobsSearchReducer";

const rootReducer = combineReducers({
  myprofile: profileReducer,
  aside: asideReducer,
  experience: ExperienceReducer,
  utente: utenteReducer,
  experienceUtente: UtenteExperienceReducer,
  education: educationReducer,
  post: HomePostReducer,
  create: createPostReducer,
  jobs: jobReducer,
  company: companyReducer,
  jobsByCategory: jobsByCategoryReducer,
  jobSearch: jobSearchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
