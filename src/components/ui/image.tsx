import { classify } from '@/utils/classify';
import { Image as ExpoImage } from 'expo-image';
import { cssInterop } from 'nativewind';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof ExpoImage> {
	className?: string;
}

export function Image({ className, ...props }: Props) {
	const _className = classify(['h-full w-full', className]);
	return <ExpoImage className={_className} contentFit='contain' {...props} />;
}

cssInterop(ExpoImage, {
	className: 'style',
});
