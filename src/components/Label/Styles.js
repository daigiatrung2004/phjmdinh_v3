import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import { mediaQueries } from '~/utils/reponsive';

const ElementTag = forwardRef(({ to, type, children, ...propsDefault }, ref) => {
	let Element = 'h4';
	if (to) {
		Element = Link;
	} else {
		Element = type;
	}
	return (
		<Element
			ref={ref}
			to={to}
			{...propsDefault}
		>
			{children}
		</Element>
	);
});

export const Anchor = styled(ElementTag)`
	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '16px')};
	display: block;
	clear: both;
	line-height: 1;
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 700)};
	position: relative;
	color: var(--text-color-search);

	&.primary {
		color: var(--primary);
	}

	&.normal {
		font-weight: normal;
		color: var(--white);
		font-size: 1.4rem;
		width: 7rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	&.hover-under:hover {
		text-decoration: underline;
	}

	&.vertical {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	&.flex-center {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&.text-italic {
		font-style: italic;
	}

	&.hover-text-color:hover {
		color: var(--primary) !important;
	}

	&.hover-text-color:hover .icon > svg path {
		fill: var(--primary) !important;
	}

	&.hover-text-scaling:hover {
		font-size: calc(var(--scale-item) * var(--size-icon));
		transition: all 0.2s var(--timing-function-carousel);
	}

	&.pointer {
		cursor: pointer;
	}

	& .icon {
		font-size: ${({ iconsize }) => (iconsize ? iconsize : 'inherit')};
	}

	.content ~ .icon,
	.icon ~ .content {
		margin-left: 10px;
	}
`;
