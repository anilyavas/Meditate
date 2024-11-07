import { FlatList } from 'react-native';
import { meditations } from '@/data';
import MeditationListItem from '@/components/MeditationListItem';

export default function App() {
  return (
    <FlatList
      data={meditations}
      contentContainerClassName='gap-5 p-3'
      className='bg-white'
      renderItem={({ item }) => <MeditationListItem item={item} />}
    />
  );
}
