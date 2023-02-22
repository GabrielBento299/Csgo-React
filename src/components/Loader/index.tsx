import './styles.scss';

interface ILoaderProps {
  size?: 'small';
}

export default function Loader({ size }: ILoaderProps) {
  return (
    <div className={`loader ${size === 'small' && 'small'}`}>:
      <div className="spinner" />
      <h1>Carregando...</h1>
    </div>
  );
}
