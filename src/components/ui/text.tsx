import { classify } from '@/utils/classify';
import { ComponentProps } from 'react';
import { Text as RNText } from 'react-native';

interface Props extends ComponentProps<typeof RNText> {
	size?: keyof typeof sizes;
	color?: keyof typeof colors;
	weight?: keyof typeof weights;
	align?: keyof typeof aligns;
	className?: string;
}

export function Text({ size = 'base', color, weight, align, className, ...props }: Props) {
	const _className = classify([
		'-my-1.5',
		sizes[size],
		color && colors[color],
		weight && weights[weight],
		align && aligns[align],
		className,
	]);

	return <RNText className={_className} allowFontScaling={false} {...props} />;
}

const sizes = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
};

const colors = {
	white: 'text-white',
	black: 'text-black',
	text: 'text-text',
	primary: 'text-primary',
	secondary: 'text-secondary',
};

const weights = {
	normal: 'font-normal',
	medium: 'font-medium',
	bold: 'font-bold',
};

const aligns = {
	left: 'text-left',
	center: 'text-center',
	right: 'text-right',
};
