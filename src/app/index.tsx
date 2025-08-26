import { Aspect } from '@/components/ui/aspect';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gradient } from '@/components/ui/gradient';
import { Image } from '@/components/ui/image';
import { Pager } from '@/components/ui/pager';
import { RandomDots } from '@/components/ui/random-dots';
import { Stack } from '@/components/ui/stack';
import { Text } from '@/components/ui/text';
import { hexToRgba } from '@/utils/hexToRgba';
import { useRef } from 'react';
import { Pressable, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export default function Index() {
	const ref = useRef<PagerView>(null);

	return (
		<View className='flex-1'>
			<RandomDots count={30} />

			<Image
				className='top-safe absolute left-1/2 h-12 w-12 -translate-x-1/2 overflow-hidden rounded-xl'
				source={require('@/assets/icon.png')}
				contentFit='contain'
			/>

			<Pager scrollEnabled={false} ref={ref}>
				<View className='h-full w-full justify-center' key='index'>
					<Stack gap={10}>
						<View className='z-10 mx-auto w-[85vw]'>
							<Stack direction='row' gap={4}>
								<View className='flex-1 shadow-lg shadow-black/10'>
									<Card>
										<Aspect ratio={216 / 128}>
											<Image source={require('@/assets/dog-1.jpg')} contentFit='cover' />
										</Aspect>
									</Card>
								</View>

								<View className='flex-1 shadow-xl shadow-black/20'>
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
								<View>
									<Gradient
										className='left-1/2 -my-10 h-auto w-screen -translate-x-1/2'
										colors={[
											hexToRgba('#FFF9F3', 0),
											hexToRgba('#FFF9F3', 1),
											hexToRgba('#FFF9F3', 0),
										]}
									/>

									<Stack gap={6}>
										<Text size='3xl' weight='bold' align='center'>
											Your dream dog is just{`\r\n`}a boop away
										</Text>

										<Text size='xl' align='center' alpha='faded'>
											Because every dog deserves a forever home, and every person deserves to boop
											the snoot.
										</Text>
									</Stack>
								</View>

								<Button onPress={() => ref.current?.setPage(1)}>Start Matching</Button>
							</Stack>
						</View>
					</Stack>
				</View>

				<Questions onFinish={() => ref.current?.setPage(2)} />

				<View className='mt-safe mb-safe flex-1 px-6 pt-[88px]' key='results'>
					<Stack gap={6} className='flex-1'>
						<Card className='flex-1 overflow-visible rounded-3xl shadow-lg shadow-black/10'>
							<Image
								className='flex-1 rounded-t-2xl'
								source={require('@/assets/dog-2.jpg')}
								contentFit='cover'
							/>

							<View className='p-6'>
								<Stack gap={4}>
									<Text size='3xl' weight='bold'>
										Luna, 3
										<Text size='xl' weight='medium' alpha='faded'>
											{`  `}Golden Retriever
										</Text>
									</Text>

									<Text size='xl'>Luna is a gentle soul who loves long walks and cuddle time.</Text>
								</Stack>
							</View>
						</Card>

						<Stack direction='row' gap={6} className='justify-center'>
							<Pressable className='h-24 w-24 items-center justify-center rounded-full border-2 border-black/10 bg-white'>
								<Text size='xl' weight='medium' alpha='faded'>
									Next
								</Text>
							</Pressable>

							<Pressable className='overflow-hidden rounded-full'>
								<Image
									className='h-24 w-24'
									source={require('@/assets/icon.png')}
									contentFit='contain'
								/>
							</Pressable>
						</Stack>
					</Stack>
				</View>
			</Pager>
		</View>
	);
}

interface QuestionsProps {
	onFinish: () => void;
}

const Questions = ({ onFinish }: QuestionsProps) => {
	const ref = useRef<PagerView>(null);

	return (
		<View className='mt-safe flex-1 pt-[88px]'>
			<Stack gap={6} className='flex-1'>
				<Text size='xl' align='center' alpha='faded' className='mx-auto w-[70vw]'>
					Answer a few quick questions so we can match you with dogs who’ll thrive with you.
				</Text>

				<Pager className='-my-12 flex-1' scrollEnabled={false} ref={ref}>
					{questions.map((question, questionIndex) => (
						<View className='h-full w-full py-12' key={question.question}>
							<Card className='mx-6 overflow-visible p-6 shadow-lg shadow-black/10'>
								<Stack gap={6}>
									<Text size='2xl' weight='bold'>
										{question.question}
									</Text>

									<Stack gap={1}>
										{question.answers.map((answer) => (
											<Pressable
												className='rounded-xl border-2 border-black/10 p-4'
												onPress={
													questionIndex === questions.length - 1
														? onFinish
														: () => ref.current?.setPage(questionIndex + 1)
												}
												key={answer}
											>
												<Text size='lg' weight='medium'>
													{answer}
												</Text>
											</Pressable>
										))}
									</Stack>
								</Stack>
							</Card>
						</View>
					))}
				</Pager>
			</Stack>
		</View>
	);
};

const questions = [
	{
		question: 'What type of home do you have?',
		answers: [
			'Apartment/flat',
			'House with small garden',
			'House with large garden',
			'Farm/rural property',
			'Other',
		],
	},
	{
		question: 'Do you have children or other pets?',
		answers: [
			'No children, no other pets',
			'Young children (under 10)',
			'Older children (10+)',
			'Other pets',
		],
	},
	{
		question: 'How many hours are you away from home daily?',
		answers: ['Mostly at home', '2-4 hours', '4-6 hours', '6+ hours'],
	},
	{
		question: 'How active are you?',
		answers: [
			'Gentle walks, indoor activities',
			'Regular walks, outdoor activities',
			'Long hikes, running, very active',
			'Mix of acive and relaxed days',
		],
	},
	{
		question: 'What’s your experience with dogs?',
		answers: ['First-time dog owner', 'Some experience', 'Very experience', 'Professional/trainer'],
	},
];
