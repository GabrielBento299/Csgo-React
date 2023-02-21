import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Loader from '../../components/Loader';
import Texts from './components/Texts/Index';

import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <Texts />
      <div className="social-medias">
        <a href="#/">
          <FaInstagram size={28} color="#fff" />
        </a>
        <a href="#/">
          <FaLinkedin size={28} color="#fff" />
        </a>
        <a href="#/">
          <FaGithub size={28} color="#fff" />
        </a>
      </div>
    </div>
  );
}
