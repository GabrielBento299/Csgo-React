import {
  FaGem, FaSortAlphaUp,
} from 'react-icons/fa';
import Card from '../../components/Card';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface IMusics {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: string;
  exclusive: boolean;
}

export default function Musics() {
  const {
    itemsApi, loading, page,
  } = useFetch('music_kits');

  return (
    <PageLayout
      title="Musicas"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((music: IMusics) => (
        <Card
          key={`${music.id}- ${music.name}`}
          image={music.image}
          name={music.name}
          description={music.description}
        >
          <ul className="list">
            <li> <FaGem size={16} /> Raridade: {music.rarity} </li>
            <li> <FaSortAlphaUp size={16} /> Exclusiva: {music.exclusive ? 'Verdadeiro' : 'Falso'} </li>
          </ul>
        </Card>
      ))}

    </PageLayout>
  );
}
