import { classify } from '@/utils/classify';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

export function Gradient({ className, ...props }: LinearGradientProps) {
	const _className = classify(['absolute inset-0 h-full w-full', className]);
	return <LinearGradient className={_className} {...props} />;
}

cssInterop(LinearGradient, {
	className: 'style',
});
