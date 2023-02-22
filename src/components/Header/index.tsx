import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import path from '../../constants/path';
import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <nav className="list-links">
        <NavLink to={path.home}> <FaHome /> </NavLink>
        <NavLink to={path.agents}> Agentes </NavLink>
        <NavLink to={path.cases}> Caixas </NavLink>
        <NavLink to={path.graffiti}> Grafite </NavLink>
        <NavLink to={path.music}> Musicas </NavLink>
        <NavLink to={path.skins}> Skins </NavLink>
        <NavLink to={path.stickers}> Stickers </NavLink>
      </nav>
    </header>
  );
}
