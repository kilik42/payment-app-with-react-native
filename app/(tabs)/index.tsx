import { View, Text, StatusBar} from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
       <Text> open up app in the browser this might work</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}
