import { ReactNode, useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Loader from '../Loader';

import './styles.scss';

interface IPageLayoutProps {
  children: ReactNode;
  title: string;
  hasData: boolean;
  initialLOading: boolean;
  fetchingMoreData: boolean;
}

export default function PageLayout({
  children, title, hasData, initialLOading, fetchingMoreData,
}: IPageLayoutProps) {
  if (initialLOading) {
    return <Loader />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pageYPosition, setPageYPosition] = useState(0);

  function getPageYAfterScroll() {
    setPageYPosition(window.scrollY);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener('scroll', getPageYAfterScroll);
    return () => window.removeEventListener('scroll', getPageYAfterScroll);
  }, []);

  function backToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="page-layout">
      <h1>{title}</h1>
      <main className="content">
        {!hasData && <p className="no-data">Sem dados...</p>}
        {children && <div className="children">{children}</div>}
        {fetchingMoreData && <Loader size="small" />}
      </main>

      <button
        type="button"
        onClick={backToTop}
        className={`back-to-top ${pageYPosition > 250 && 'visible'}`}
      >
        <FaArrowUp size={28} color="#fff" />
      </button>
    </div>
  );
}
