import { Text, View } from 'react-native';
import { Meditation } from '../types';

export default function MeditationListItem({ item }: { item: Meditation }) {
  return (
    <View className='p-5 m-5 border rounded-xl'>
      <Text className='font-semibold text-2xl'>{item.title}</Text>
    </View>
  );
}
