import PropTypes from 'prop-types';
import { useState } from 'react';

import ImageDefault from '~/assets/images';
import { StaticImage } from './Styles';

function Image({ src, alt = 'No title image', className, ...propsDefault }) {
	const [fallBack, setFallBack] = useState('');
	let Img = className ? 'img' : StaticImage;

	return (
		<Img
			src={fallBack || src}
			alt={alt}
			className={className}
			onError={() => setFallBack(ImageDefault.noImage)}
			{...propsDefault}
		/>
	);
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	className: PropTypes.string,
};

export default Image;
