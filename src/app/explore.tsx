import { Button } from '@/components/ui/button';
import { Stack } from '@/components/ui/stack';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function Explore() {
	return (
		<View className='max-w-[300px] flex-1 justify-center self-center'>
			<Stack gap={6}>
				<Text size='2xl' weight='bold' align='center'>
					Explore
				</Text>

				<Text align='center'>
					Because every dog deserves a forever home, and every person deserves to boop the snoot.
				</Text>

				<Button href='/explore'>Start Matching</Button>
			</Stack>
		</View>
	);
}
