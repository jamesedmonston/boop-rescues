import { classify } from '@/utils/classify';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';

interface Props extends PropsWithChildren {
	direction?: keyof typeof directions;
	gap?: number;
	className?: string;
}

export function Stack({ direction = 'column', gap = 0, children, className }: Props) {
	const _className = classify([directions[direction], className]);
	const gapValue = gap * 4;

	return (
		<View className={_className} style={{ gap: gapValue }}>
			{children}
		</View>
	);
}

const directions = {
	column: 'flex-col',
	row: 'flex-row',
};
