// App.tsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Main } from './pages/Main';
import { Form_1 } from './pages/Form_1';
import Form_2Comp from './components/Form_2Comp';
import { Notfoundpage } from './pages/Notfoundpage';
import { useAppDispatch, useAppSelector } from './store/store';
import { resetForm } from './store/reducers/formReducer';

function App() {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.form);

  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Form_1" element={<Form_1 />} />
          <Route path="Form_2" element={<Form_2Comp formState={formState} />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
