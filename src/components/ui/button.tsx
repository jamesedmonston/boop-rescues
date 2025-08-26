import { Text } from '@/components/ui/text';
import { classify } from '@/utils/classify';
import { Link, LinkProps } from 'expo-router';
import { ComponentProps } from 'react';
import { Pressable, View } from 'react-native';

interface Props extends ComponentProps<typeof View> {
	href?: LinkProps['href'];
	className?: string;
}

export function Button({ href, className, children, ...props }: Props) {
	const _className = classify([
		'h-12 w-full items-center justify-center rounded-full bg-primary text-center text-lg font-bold leading-[40px] text-white',
		className,
	]);

	if (href) {
		return (
			<Link href={href} className={_className} suppressHighlighting>
				{children}
			</Link>
		);
	}

	return (
		<Pressable className={_className} {...props}>
			<Text color='white' weight='bold' align='center'>
				{children}
			</Text>
		</Pressable>
	);
}
