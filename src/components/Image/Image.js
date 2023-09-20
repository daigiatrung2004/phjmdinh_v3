import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

import ImageDefault from '~/assets/images';
import * as $ from './Styles';

const Image = forwardRef(function ({ href, src, alt = 'No title image', className, children, ...propsDefault }, ref) {
	const [fallBack, setFallBack] = useState('');
	let Img = className ? 'img' : $.StaticImage;
	// console.log('className:', className);

	return (
		<$.Wrapper to={href}>
			<Img
				ref={ref}
				src={fallBack || src}
				alt={alt}
				className={className}
				onError={() => setFallBack(ImageDefault.noImage)}
				{...propsDefault}
			/>
			{children}
		</$.Wrapper>
	);
});

Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
};

export default Image;
