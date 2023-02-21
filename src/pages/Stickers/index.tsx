import {
  FaGem, FaMinus, FaPlus, FaShieldAlt,
} from 'react-icons/fa';
import Card from '../../components/Card';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface IStickers {
  id: string;
  name: string;
  description: string;
  image: string;
}

export default function Stickers() {
  const {
    itemsApi, loading, page,
  } = useFetch('stickers');

  return (
    <PageLayout
      title="Stickers"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((stickers: IStickers) => (
        <Card
          key={`${stickers.id}- ${stickers.name}`}
          image="https://cdn.cardsrealm.com/images/uploads/7104-1662589752.jpeg"
          name={stickers.name}
          description={stickers.description}
        />
      ))}

    </PageLayout>
  );
}
