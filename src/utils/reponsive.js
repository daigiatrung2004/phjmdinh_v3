const size = {
	laptop: {
		max: Infinity,
		min: '1024px',
	},
	desktop: {
		min: '1024px',
		max: Infinity,
	},
	tablet: {
		max: '1023px',
		min: '740px',
	},
	mobile: {
		max: '739px',
		min: -Infinity,
	},
};

export const device = {
	laptop: `(min-width: ${size.laptop['min']})`,
	desktop: `(min-width: ${size.desktop['min']})`,
	tablet: `(min-width : ${size.tablet['min']}) and (max-width: ${size.tablet['max']})`,
	mobile: `(max-width: ${size.mobile['max']})`,
};

export const mediaQueries = (key, style, debugLag) => {
	if ((typeof key !== 'string' && typeof key !== 'object') || (typeof key === 'object' && !Array.isArray(key))) {
		return;
	}

	if (typeof key === 'string') {
		key = [key];
	}

	let css = key.map((item, index) => {
		if (typeof style === 'object' && Array.isArray(style)) {
			if (key.length !== style.length) {
				index = style.length - 1;
			}

			return `@media only screen and ${device[item]} {
				${style[index]}
			}`;
		} else if (typeof style === 'string') {
			return `@media only screen and ${device[item]} {
				${style}
			}`;
		} else {
			return '';
		}
	});

	if (debugLag) {
		console.log('debug css ======', css);
	}
	return css.join('');
};
export default mediaQueries;
