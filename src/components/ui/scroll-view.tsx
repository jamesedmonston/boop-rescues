import { ComponentProps } from 'react';
import { ScrollView as RNScrollView } from 'react-native';

export function ScrollView(props: ComponentProps<typeof RNScrollView>) {
	return <RNScrollView {...props} />;
}
