import { Text, View, Pressable } from 'react-native';
import { Meditation } from '@/types';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router';

export default function MeditationListItem({ item }: { item: Meditation }) {
  return (
    <Link href={`/meditation/${item.id}`} asChild>
      <Pressable className='flex-row items-center gap-5'>
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
      </Pressable>
    </Link>
  );
}
