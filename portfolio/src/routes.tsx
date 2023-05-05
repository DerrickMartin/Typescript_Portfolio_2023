
import Home from './pages/Home';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import About from "./pages/About";
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