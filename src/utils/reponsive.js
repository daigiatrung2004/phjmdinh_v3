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
export const mediaQueries = (key, style) => {
	return `@media only screen and ${device[key]} {
		${style}
	}`;
};
export default mediaQueries;
