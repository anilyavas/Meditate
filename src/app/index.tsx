import { FlatList, Text, View } from 'react-native';
import { meditations } from '../data';
import MeditationListItem from '../components/MeditationListItem';

export default function App() {
  return (
    <FlatList
      data={meditations}
      renderItem={({ item }) => <MeditationListItem item={item} />}
    />
  );
}
