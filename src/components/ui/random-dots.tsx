import { classify } from '@/utils/classify';
import { View } from 'react-native';

interface Props {
	count?: number;
}

export function RandomDots({ count = 20 }: Props) {
	const colors = ['bg-primary', 'bg-secondary'];
	const opacities = ['opacity-10', 'opacity-20', 'opacity-30', 'opacity-40', 'opacity-50'];
	const sizes = ['h-2 w-2', 'h-3 w-3', 'h-4 w-4'];
	const minDistance = 4;
	const dots: {
		left: number;
		top: number;
		color: string;
		opacity: string;
		size: string;
	}[] = [];

	for (let i = 0; i < count; i++) {
		let attempts = 0;
		let validPosition = false;

		while (!validPosition && attempts < 100) {
			const top = Math.random() * 100;
			const left = Math.random() * 100;

			validPosition = dots.every((existingDot) => {
				const distance = Math.sqrt(
					Math.pow(top - existingDot.top, 2) + Math.pow(left - existingDot.left, 2),
				);

				return distance > minDistance;
			});

			if (validPosition) {
				const color = colors[Math.floor(Math.random() * colors.length)];
				const opacity = opacities[Math.floor(Math.random() * opacities.length)];
				const size = sizes[Math.floor(Math.random() * sizes.length)];

				dots.push({
					left,
					top,
					color,
					opacity,
					size,
				});

				break;
			}

			attempts++;
		}
	}

	return dots.map((dot, i) => {
		const className = classify(['absolute rounded-full', dot.size, dot.color, dot.opacity]);

		return (
			<View
				className={className}
				style={{
					left: `${dot.left}%`,
					top: `${dot.top}%`,
				}}
				key={i}
			/>
		);
	});
}
