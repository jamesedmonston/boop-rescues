import * as React from 'react';
import { View } from 'react-native';

interface Props extends React.PropsWithChildren {
	ratio: number;
	className?: string;
}

export function Aspect({ ratio, className, children }: Props) {
	return (
		<View className={className} style={{ aspectRatio: ratio }}>
			<View className='absolute inset-0'>{children}</View>
		</View>
	);
}
