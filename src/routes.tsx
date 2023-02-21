import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import path from './constants/path';
import Loader from './components/Loader';
import Agents from './pages/Agents';

export default function RoutesPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={path.home} element={<Home />} />
        <Route path={path.agents} element={<Agents />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
