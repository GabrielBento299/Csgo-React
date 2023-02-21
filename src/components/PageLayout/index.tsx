import { ReactNode } from 'react';
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

  return (
    <div className="page-layout">
      <h1>{title}</h1>
      <main className="content">
        {!hasData && <p className="no-data">Sem dados...</p>}
        {children && <div className="children">{children}</div>}
        {fetchingMoreData && <Loader size="small" />}
      </main>
    </div>
  );
}
