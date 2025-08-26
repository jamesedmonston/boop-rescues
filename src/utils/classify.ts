import { twMerge } from 'tailwind-merge';

export function classify(classes: (string | undefined)[]) {
	return twMerge(classes);
}
