import { faArrowUpFromBracket, faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import Button from '~/components/Button';
import Carousel from '~/components/Carousel';
import Paragraph from '~/components/Paragraph';
import Tabs from '~/components/Tabs';
import * as $ from './Styles';
import ListItems from './datasets';

function Album() {
	const paragraphRef = useRef();
	const [heightParagraph, setHeightParagraph] = useState('0px');

	return (
		<>
			<Carousel
				CarouselItems={ListItems}
				type="wall"
				offset={['20rem', '5rem', 'unset']}
				devicearguments={{
					mobile: {
						style: `background-size: 71% 29.2rem; background-repeat: no-repeat; background-position: top right; height: calc(30rem + ${heightParagraph})`,
					},
				}}
				indicatorFlag
				style={{ marginBottom: '2.5rem' }}
				render={item => {
					return (
						<>
							<$.CarouselTitle>{item.title}</$.CarouselTitle>
							<$.Rank>{item.rank}</$.Rank>
							<$.Info>{item.info}</$.Info>
							<$.Tags>{item.tags}</$.Tags>
							<Paragraph
								ref={paragraphRef}
								handleSizeParagh={setHeightParagraph}
								devicearguments={{
									desktop: {
										style: 'font-size: 1.2rem; margin-top: 1.2rem;color: var(--white);width: 40%;',
									},
									tablet: {
										style: 'font-size: 1.2rem; margin-top: 1.2rem;color: var(--white);width: 40%;',
									},
									mobile: {
										style: 'font-size: 1.2rem;margin-top: 1.2rem;color: var(--white);width: 60%;',
									},
								}}
								isTextOverFlow
								isToggleFlag
								numLine={3}
								moreTitle="Giới thiệu"
								moreTitleDetail="Thu nhỏ giới thiệu"
								linkMore={'./reviewfilm/'}
							>
								{item.desc}
							</Paragraph>
							<$.WrapBtn>
								<Button
									theme={{ type: 'primary', size: 'small' }}
									leftIcon={
										<FontAwesomeIcon
											icon={faPlay}
											style={{ color: 'var(--white)' }}
										/>
									}
									styleCustom={{ marginLeft: '0px' }}
								>
									Chiếu phát
								</Button>
								<Button
									leftIcon={
										<FontAwesomeIcon
											icon={faArrowUpFromBracket}
											style={{ color: 'var(--white)' }}
										/>
									}
									theme={{ type: 'black-primary', size: 'small' }}
								>
									Chia sẻ
								</Button>
								<Button
									leftIcon={
										<FontAwesomeIcon
											icon={faBookmark}
											style={{ color: 'var(--white)' }}
										/>
									}
									theme={{ type: 'black-primary', size: 'small' }}
								>
									Sưu tập
								</Button>
							</$.WrapBtn>
						</>
					);
				}}
			/>
			<Tabs />
		</>
	);
}

export default Album;
