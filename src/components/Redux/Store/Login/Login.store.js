import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../../Engines/Login-slice/Loginslice';
import landingReducer from "../../Engines/Landingpage.slice/Landingpageslice"
const store = configureStore({
  reducer: {
    login: loginReducer,
    landing: landingReducer 
  },
});

export default store;
