import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import RoutesPage from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutesPage />
    </BrowserRouter>
  );
}
