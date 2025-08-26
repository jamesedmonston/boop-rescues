import '@/style.css';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export default function RootLayout() {
	return (
		<>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: '#FFF9F3' },
				}}
			/>

			<StatusBar style='auto' />
		</>
	);
}
