import { cssInterop } from 'nativewind';
import PagerView, { PagerViewProps } from 'react-native-pager-view';

interface Props extends PagerViewProps {
	ref?: React.RefObject<PagerView | null>;
}

export function Pager({ children, ref, ...props }: Props) {
	return (
		<PagerView className='flex-1' initialPage={0} ref={ref} {...props}>
			{children}
		</PagerView>
	);
}

cssInterop(PagerView, {
	className: 'style',
});
