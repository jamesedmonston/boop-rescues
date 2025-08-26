import { Aspect } from '@/components/ui/aspect';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Stack } from '@/components/ui/stack';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function Index() {
	return (
		<View className='flex-1 justify-center self-center'>
			<Stack gap={6}>
				<View className='w-[85vw]'>
					<Stack direction='row' gap={4}>
						<View className='flex-1'>
							<Card>
								<Aspect ratio={216 / 128}>
									<Image source={require('@/assets/dog-1.jpg')} contentFit='cover' />
								</Aspect>
							</Card>
						</View>

						<View className='flex-1'>
							<Card>
								<Aspect ratio={216 / 128}>
									<Image source={require('@/assets/dog-2.jpg')} contentFit='cover' />
								</Aspect>
							</Card>
						</View>
					</Stack>
				</View>

				<View className='w-[70vw] justify-center self-center'>
					<Stack gap={6}>
						<Text size='2xl' weight='bold' align='center'>
							Your dream dog is just{`\r\n`}a boop away
						</Text>

						<Text align='center'>
							Because every dog deserves a forever home, and every person deserves to boop the
							snoot.
						</Text>

						<Button href='/explore'>Start matching</Button>
					</Stack>
				</View>
			</Stack>
		</View>
	);
}
