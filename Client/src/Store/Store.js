import { configureStore, combineReducers } from "@reduxjs/toolkit";
import infoReducer from "./Slice/getPersonalDetail";
import pictureReducers from "./Slice/getImage";
import SchoolInfoReducer from "./Slice/getSchoolInfo";
import MarksheetReducers from "./Slice/getMarkSheet";
import contactReducers from "./Slice/getContactInfo";

const rootReducer = combineReducers({
  personalInfo: infoReducer,
  image: pictureReducers,
  SchoolInfo: SchoolInfoReducer,
  MarksheetImage: MarksheetReducers,
  contactInfo: contactReducers
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
