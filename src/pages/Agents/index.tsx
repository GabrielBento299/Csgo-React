/* eslint-disable jsx-a11y/heading-has-content */
import { FaGem } from 'react-icons/fa';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface IAgent {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: string
}

export default function Agents() {
  const {
    itemsApi, loading, page,
  } = useFetch('agents');

  return (
    <PageLayout
      title="Agentes"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((agent: IAgent) => (
        <Card
          key={`${agent.id}`}
          image={agent.image}
          name={agent.name}
          description={agent.description}
        >
          <ul className="list">
            <li> <FaGem size={16} /> Raridade: {agent.rarity} </li>
          </ul>
        </Card>
      ))}

    </PageLayout>
  );
}
