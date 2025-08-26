import { Text } from '@/components/ui/text';
import { classify } from '@/utils/classify';
import { Link, LinkProps } from 'expo-router';
import { ComponentProps, PropsWithChildren } from 'react';
import { Pressable } from 'react-native';

interface Props extends Omit<ComponentProps<typeof Pressable>, 'children'>, PropsWithChildren {
	href?: LinkProps['href'];
	className?: string;
}

export function Button({ href, className, children, ...props }: Props) {
	const _className = classify([
		'h-12 items-center justify-center rounded-full bg-primary text-center text-2xl font-bold leading-[40px] text-white',
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
			<Text size='2xl' color='white' weight='bold' align='center'>
				{children}
			</Text>
		</Pressable>
	);
}
