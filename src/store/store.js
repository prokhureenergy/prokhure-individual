import { configureStore, combineReducers, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import { userApi } from "../redux/user/userApi";

const initialState = {
  registerPayload: null,
  user: null,
  otp: "",
  createAccount: false,
};

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setRegisterPayload: (state, action) => {
      state.registerPayload = action.payload;
    },
    setOtp: (state, action) => {
      state.otp = action.payload;
    },
    setCreateAccount: (state, action)=>{
      state.createAccount = action.payload;
    }
  },
});

export const { setUser, setRegisterPayload, setOtp, setCreateAccount } = userSlice.actions;

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  userState: userSlice.reducer,
});

export const store = configureStore({
  // reducer:{ [userApi.reducerPath]: userApi.reducer},
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
