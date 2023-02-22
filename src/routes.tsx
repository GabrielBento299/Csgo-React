import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import path from './constants/path';
import Agents from './pages/Agents';
import Cases from './pages/Cases';
import Graffiti from './pages/Graffiti';
import Musics from './pages/Musics';
import Skins from './pages/Skins';
import Stickers from './pages/Stickers';

export default function RoutesPage() {
  return (
    <Routes>
      <Route path={path.home} element={<Home />} />
      <Route path={path.agents} element={<Agents />} />
      <Route path={path.cases} element={<Cases />} />
      <Route path={path.graffiti} element={<Graffiti />} />
      <Route path={path.music} element={<Musics />} />
      <Route path={path.skins} element={<Skins />} />
      <Route path={path.stickers} element={<Stickers />} />

      <Route path="*" element={<Home />} />
    </Routes>
  );
}
