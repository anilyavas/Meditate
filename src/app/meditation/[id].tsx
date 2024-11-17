import { router, useLocalSearchParams } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import { meditations } from '@/data';
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const meditation = meditations.find((m) => m.id === Number(id));

  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return (
    <SafeAreaView className='bg-orange-400 flex-1 p-2 justify-between'>
      <View className='flex-1'>
        {/* Header */}
        <View className='flex-1'>
          <View className='flex-row justify-between p-10 items-center'>
            <AntDesign name='infocirlceo' size={24} color='black' />
            <View className='bg-zinc-800 p-2 rounded-md'>
              <Text className='font-semibold text-white '>
                Today's Meditation
              </Text>
            </View>
            <AntDesign
              onPress={() => router.back()}
              name='close'
              size={24}
              color='black'
            />
          </View>
          <Text className='text-3xl mt-20 text-center text-zinc-800 font-semibold'>
            {meditation?.title}
          </Text>
        </View>
        <Pressable className='bg-zinc-800 self-center p-6 w-20 aspect-square rounded-full items-center'>
          <FontAwesome6 name='play' size={24} color='snow' />
        </Pressable>
        <View className='flex-1'>
          {/* Footer */}
          <View className='p-5 mt-auto gap-5'>
            <View className='flex-row justify-between'>
              <MaterialIcons name='airplay' color='#3a3937' size={24} />
              <MaterialCommunityIcons
                name='cog-outline'
                color='#3a3937'
                size={24}
              />
            </View>
            {/* Playback indicator */}
            <Slider
              style={{ width: '100%', height: 3 }}
              value={0.5}
              onSlidingComplete={(value) => console.log(value)}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor='#3a3937'
              maximumTrackTintColor='#3a393755'
              thumbTintColor='#3a3937'
            />
            <View className='flex-row justify-between'>
              <Text>03:24</Text>
              <Text>13:14</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
