import {
  FaGem, FaMinus, FaPlus, FaShieldAlt,
} from 'react-icons/fa';
import Card from '../../components/Card';
import PageLayout from '../../components/PageLayout';
import useFetch from '../../hooks/useFetch';

interface ISkins {
  id: string;
  name: string;
  description?: string;
  image: string;
  rarity?: string;
  max_float: number;
  min_float: number;
  stattrak: boolean;
}

export default function Skins() {
  const {
    itemsApi, loading, page,
  } = useFetch('skins');

  return (
    <PageLayout
      title="Skins"
      hasData={!loading && !!itemsApi.length}
      initialLOading={loading && !itemsApi.length}
      fetchingMoreData={loading && page > 1}
    >
      {itemsApi.map((skins: ISkins) => (
        <Card
          key={`${skins.id}- ${skins.name}`}
          image="https://cdn.cardsrealm.com/images/uploads/7104-1662589752.jpeg"
          name={skins.name}
          description={skins.description}
        >
          <ul className="list">
            <li> <FaMinus size={16} /> Minimo float: {skins.min_float} </li>
            <li> <FaPlus size={16} /> Maximo float: {skins.min_float} </li>
            <li> <FaShieldAlt size={16} /> Exclusiva: {skins.stattrak ? 'Verdadeiro' : 'Falso'} </li>
            <li> <FaGem size={16} /> Raridade: {skins.rarity} </li>
          </ul>
        </Card>
      ))}

    </PageLayout>
  );
}
