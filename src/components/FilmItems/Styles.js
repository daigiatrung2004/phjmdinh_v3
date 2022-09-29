import styled from 'styled-components';
import ImageComponent from '~/components/Image';

// item
export const Item = styled.div`
	--height-img-item: 40px;
	--width-img-item: 40px;
	display: flex;
	padding: 2px 10px 10px 10px;
	margin-bottom: 8px;
	border-bottom: 1px dashed;
	width: 400px;
	max-height: 40px;
`;

export const Image = styled(ImageComponent)`
	max-height: var(--height-img-item);
	max-width: var(--width-img-item);
	padding-right: 5px;
`;

export const Title = styled.h4`
	font-size: 1.8rem;
	margin: 0;
`;

export const SubTitle = styled.small`
	font-size: 1.5rem;
	color: #a4a6a6;
	font-style: italic;
`;

export const ItemInfo = styled.div`
	flex-grow: 1;
`;
