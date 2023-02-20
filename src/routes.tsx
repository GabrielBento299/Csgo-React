import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Home from './pages/Home';
import path from './constants/path';

export default function RoutesPage() {
  return (
    <Suspense fallback={<div>Carregando</div>}>
      <Routes>
        <Route path={path.home} element={<Home />} />
      </Routes>
    </Suspense>
  );
}
