import { FaSteam } from 'react-icons/fa';
import { ReactNode } from 'react';

import './styles.scss';

interface ICardProps {
  name: string;
  image: string;
  description?: string;
  children?: ReactNode;
}

export default function Card({
  name, image, description, children,
}: ICardProps) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <main>
        <div className="content">
          <h2>{name}</h2>
          <p>{description}</p>
          {children && (
          <div className="card-description">
            <div className="divider-top" />
            {children}
          </div>
          )}
        </div>

        <div className="divider">
          <a target="_blank" href="#;" className="btn-link">Ver na loja <FaSteam className="icon" size={20} /> </a>
        </div>
      </main>
    </div>
  );
}
