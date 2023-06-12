import PropTypes from 'prop-types';
import { useState } from 'react';

import ImageDefault from '~/assets/images';
import * as $ from './Styles';

function Image({ href, src, alt = 'No title image', className, children, ...propsDefault }) {
	const [fallBack, setFallBack] = useState('');
	let Img = className ? 'img' : $.StaticImage;
	console.log('className:', className);

	return (
		<$.Wrapper to={href}>
			<Img
				src={fallBack || src}
				alt={alt}
				className={className}
				onError={() => setFallBack(ImageDefault.noImage)}
				{...propsDefault}
			/>
			{children}
		</$.Wrapper>
	);
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string,
	className: PropTypes.string,
};

export default Image;
