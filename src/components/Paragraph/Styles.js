import styled from 'styled-components';
import Label from '~/components/Label';
import { mediaQueries } from '~/utils/reponsive';

export const ParagraphSheet = styled.p`
	position: relative;
	margin-bottom: 2.5rem;
	& span {
		display: -webkit-box;
		-webkit-line-clamp: ${({ numLine }) => numLine};
		-webkit-box-orient: vertical;
		text-overflow: ${({ isTextOverFlow }) => (isTextOverFlow && 'ellipsis') || 'unset'};
		overflow: hidden;
		white-space: normal;
		line-height: 1.8rem;
	}

	&.primary {
		color: var(--primary);
	}

	${({ devicearguments }) => {
		if (devicearguments) {
			let queries = Object.keys(devicearguments).map(key => {
				return mediaQueries(key, devicearguments[key]['style']);
			});
			return queries.join('');
		}
	}}
`;

export const More = styled(Label)`
	position: absolute;
	bottom: -2.1rem;
	right: 1rem;
	font-size: 1.2rem;
	cursor: pointer;
`;
