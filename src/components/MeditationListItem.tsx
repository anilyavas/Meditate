import { Text, View } from 'react-native';
import { Meditation } from '@/types';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

export default function MeditationListItem({ item }: { item: Meditation }) {
  return (
    <View className='flex-row items-center gap-5'>
      <View className='bg-green-700 p-2 rounded-full'>
        <FontAwesome name='check' size={16} color='white' />
      </View>
      <View className='p-5 border rounded-xl flex-1 py-8'>
        <Text className='font-semibold text-2xl mb-2'>{item.title}</Text>
        <View className='flex-row gap-1 items-center'>
          <FontAwesome6 name='clock' size={16} color='#6B7280' />
          <Text className='text-gray-600'>{item.duration} min</Text>
        </View>
      </View>
    </View>
  );
}
