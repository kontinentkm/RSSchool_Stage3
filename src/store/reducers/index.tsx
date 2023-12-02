// reducers/index.tsx
import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './formReducer'; // создайте этот файл на следующем шаге

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
