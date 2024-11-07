import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text className='font-bold text-4xl p-10 bg-red-500 color-blue-500'>
        Home Screen
      </Text>
      <StatusBar style='auto' />
    </View>
  );
}
