import Carousel from '~/components/Carousel';
import ListItems from './datasets';
import * as $ from './Styles';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from '~/components/Paragraph';
import { faArrowUpFromBracket, faBookBookmark, faBookmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tabs from '~/components/Tabs';

function Album() {
	console.log('ListItems Album:', Array.isArray(ListItems) && ListItems.sortobj('index'));
	return (
		<>
			<Carousel
				CarouselItems={ListItems}
				type="wall"
				offset={['20rem', '5rem', 'unset']}
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
								style={{
									fontSize: '1.2rem',
									marginTop: '1.2rem',
									color: 'var(--white)',
									width: '40%',
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
