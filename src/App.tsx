// App.tsx
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Main } from './pages/Main';
import { Form_1 } from './pages/Form_1';
import { Notfoundpage } from './pages/Notfoundpage';
import { useAppDispatch } from './store/store';
import { resetForm } from './store/reducers/formReducer';
import { Form_2 } from './pages/Form_2';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetForm());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Form_1" element={<Form_1 />} />
          {/* Уберем передачу formState в Form_2 */}
          <Route path="Form_2" element={<Form_2 />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
