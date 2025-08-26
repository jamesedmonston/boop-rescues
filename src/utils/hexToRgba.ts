export function hexToRgba(hex: string, alpha: number) {
	if (alpha === 1) {
		return hex;
	}

	const colors = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	let r = 0;
	let g = 0;
	let b = 0;

	if (colors) {
		r = parseInt(colors[1], 16);
		g = parseInt(colors[2], 16);
		b = parseInt(colors[3], 16);
	}

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
