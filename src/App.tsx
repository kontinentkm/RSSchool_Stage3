import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';

import { Main } from './pages/Main';
import { Form_1 } from './pages/Form_1';
import { Form_2 } from './pages/Form_2';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Form_1" element={<Form_1 />} />
          <Route path="Form_2" element={<Form_2 />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
