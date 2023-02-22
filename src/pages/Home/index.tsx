import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Texts from './components/Texts/Index';

import './styles.scss';

export default function Home() {
  return (
    <div className="home">
      <Texts />
      <div className="social-medias">
        <a target="_blank" href="https://www.instagram.com/biel_santos77/" rel="noreferrer">
          <FaInstagram />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/santosgabriel299/" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/GabrielBento299" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
