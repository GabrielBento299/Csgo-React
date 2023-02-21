import {
  FaGem,
} from 'react-icons/fa';
import Card from '../../components/Card';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface IGraffiti {
  id: string;
  name: string;
  image: string;
  rarity: string;
}

export default function Graffiti() {
  const {
    itemsApi, loading, page,
  } = useFetch('graffiti');

  return (
    <PageLayout
      title="CASES"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((graffiti: IGraffiti) => (
        <Card
          key={`${graffiti.id}- ${graffiti.name}`}
          image="https://cdn.cardsrealm.com/images/uploads/7104-1662589752.jpeg"
          name={graffiti.name}
        >
          <ul className="list">
            <li> <FaGem size={16} /> Raridade: {graffiti.rarity} </li>
          </ul>
        </Card>
      ))}

    </PageLayout>
  );
}
