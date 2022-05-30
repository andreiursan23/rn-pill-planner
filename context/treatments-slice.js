import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  treatments: [],
  newAddedTreatment: {
    name: null,
    strengthValue: null,
    strengthUnit: null,
    pillShape: null,
  },
};

const treatmentsSlice = createSlice({
  name: 'userTreatments',
  initialState: initialState,
  reducers: {
    createNewTreatment(state, action) {
      const { name, strengthValue, strengthUnit } = action.payload;
      state.newAddedTreatment.name = name;
      state.newAddedTreatment.strengthValue = strengthValue;
      state.newAddedTreatment.strengthUnit = strengthUnit;
    },
  },
});

export const treatmentActions = treatmentsSlice.actions;
export default treatmentsSlice.reducer;
