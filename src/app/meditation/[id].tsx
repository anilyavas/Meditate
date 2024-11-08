import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import { meditations } from '@/data';

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return <Text className='text-3xl mt-16'>{meditation?.title}</Text>;
}
