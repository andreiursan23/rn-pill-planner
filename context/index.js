import { configureStore } from '@reduxjs/toolkit';
import treatmentsSlice from './treatments-slice';

const store = configureStore({
  reducer: {
    userTreatments: treatmentsSlice,
  },
});

export default store;
