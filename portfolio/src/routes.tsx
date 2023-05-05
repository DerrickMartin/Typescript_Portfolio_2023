import { Home, Skills, Interest, About } from './pages';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/interest" element={<Interest />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;