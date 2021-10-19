import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlices';
import valueReducer from './slices/valueSlice';
import ApiReducer from './slices/ApiSlices';

export const store = configureStore({
  reducer: {
    value: valueReducer,
    user: UserReducer,
    api: ApiReducer,
  },
});
