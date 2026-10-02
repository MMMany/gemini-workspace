import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import MaintenancePage from './pages/MaintenancePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="form" element={<FormPage />} />
        <Route path="maintenance" element={<MaintenancePage />} />
      </Route>
    </Routes>
  );
}

export default App;
