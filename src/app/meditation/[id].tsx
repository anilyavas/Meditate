import { router, useLocalSearchParams } from 'expo-router';
import { Text, View, Pressable, useWindowDimensions } from 'react-native';
import { meditations } from '@/data';
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

//@ts-ignore
import audio from '../../../assets/meditations/audio1.mp3';
import {
  Easing,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

export default function MeditationDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const player = useAudioPlayer(audio);
  const status = useAudioPlayerStatus(player);
  const meditation = meditations.find((m) => m.id === Number(id));
  const { height } = useWindowDimensions();

  const top1 = useSharedValue(height * 0.2);
  const top2 = useSharedValue(height * 0.45);
  const top3 = useSharedValue(height * 0.7);

  useEffect(() => {
    const options = {
      duration: 4000,
      easing: Easing.bezier(0.5, 0, 0.5, 1),
    };

    top1.value = withRepeat(withTiming(height * 0.15, options), -1, true);
    top2.value = withDelay(
      1000,
      withRepeat(withTiming(height * 0.4, options), -1, true)
    );
    top3.value = withDelay(
      2000,
      withRepeat(withTiming(height * 0.65, options), -1, true)
    );
  }, []);

  const formatSeconds = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!meditation) {
    return <Text>Meditation not found</Text>;
  }

  return (
    <SafeAreaView className='bg-orange-400 flex-1 p-2 justify-between'>
      <View className='flex-1'>
        <View className='absolute top-0 left-0 right-0 bottom-0 items-center'>
          <View className='w-[400%] absolute aspect-square bg-yellow-400 rounded-full' />
          <View className='w-[400%] absolute aspect-square top-[50%] bg-yellow-300 rounded-full' />
          <View className='w-[400%] absolute aspect-square top-[70%] bg-orange-500 rounded-full' />
        </View>
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
        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          className='bg-zinc-800 self-center p-6 w-20 aspect-square rounded-full items-center'
        >
          <FontAwesome6
            name={status.playing ? 'pause' : 'play'}
            size={24}
            color='snow'
          />
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
              value={status.currentTime / status.duration}
              onSlidingComplete={(value) =>
                player.seekTo(value * status.duration)
              }
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor='#3a3937'
              maximumTrackTintColor='#3a393755'
              thumbTintColor='#3a3937'
            />
            <View className='flex-row justify-between'>
              <Text>{formatSeconds(status.currentTime)}</Text>
              <Text>{formatSeconds(status.duration)}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
