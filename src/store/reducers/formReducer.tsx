// reducers/formReducer.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
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

const initialState: FormState = {
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

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<Partial<FormState>>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
