// reducers/formReducer.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FirstFormState {
  firstName: string;
  age: number;
  mail: string;
  password: string;
  confirm_password: string;
  gender: string;
  TandC: string;
  upload_picture: string;
  country: string;
}

const initialState: FirstFormState = {
  firstName: '',
  age: 0,
  mail: '',
  password: '',
  confirm_password: '',
  gender: '',
  TandC: '',
  upload_picture: '',
  country: '',
};

const firstFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFirstForm: (
      state,
      action: PayloadAction<Partial<FirstFormState>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetFirstForm: () => initialState,
  },
});

export const { updateFirstForm, resetFirstForm } = firstFormSlice.actions;
export default firstFormSlice.reducer;
export type { FirstFormState };
