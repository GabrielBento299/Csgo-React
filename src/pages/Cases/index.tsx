/* eslint-disable jsx-a11y/heading-has-content */
import {
  FaBox, FaCalendarAlt,
} from 'react-icons/fa';
import Card from '../../components/Card';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface ICase {
  id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  first_sale_date: string;
}

export default function Cases() {
  const {
    itemsApi, loading, page,
  } = useFetch('cases');

  return (
    <PageLayout
      title="CASES"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((caseApi: ICase) => (
        <Card
          key={`${caseApi.id}- ${caseApi.name}`}
          image="https://cdn.cardsrealm.com/images/uploads/7104-1662589752.jpeg"
          name={caseApi.name}
          description={caseApi.description ? caseApi.description : 'Sem descrição'}
        >
          <ul className="list">
            <li> <FaBox size={16} /> Tipo: {caseApi.type} </li>
            <li> <FaCalendarAlt size={16} /> Primeira venda: {new Intl.DateTimeFormat('pt-Br').format(new Date(caseApi.first_sale_date))}            </li>
          </ul>
        </Card>
      ))}

    </PageLayout>
  );
}
