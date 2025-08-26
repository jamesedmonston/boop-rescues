import { classify } from '@/utils/classify';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props extends PropsWithChildren {
	className?: string;
}

export function Card({ className, children }: Props) {
	const _className = classify(['overflow-hidden rounded-2xl bg-white', className]);
	return <View className={_className}>{children}</View>;
}
