import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, forwardRef, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ImageDefault from '~/assets/images';
import Items from '~/components/FilmItems';
import * as $ from './Styles';

function Carousel(
	{
		CarouselItems = [],
		children,
		render,
		type = 'strecth',
		height = '700px',
		width = '100%',
		offset,
		step = '1',
		indicatorFlag,
		offsetIndicator,
		...attrs
	},
	ref
) {
	const [move, setMove] = useState('');
	const [bgMove, setBgMove] = useState('');
	const [listTmp, setListTmp] = useState(CarouselItems);
	const [bgActive, setBgActive] = useState(function () {
		if (CarouselItems && CarouselItems.length > 1) {
			console.log('carousel...====', CarouselItems);
			return CarouselItems[1].bgSrc;
		} else {
			console.log('not carousel..........=======', CarouselItems);
			return ImageDefault.noImage;
		}
	});
	const [indexActive, setIndexActive] = useState(0);
	const [distance, setDistance] = useState(0);
	const [skips, setSkips] = useState(0);
	const refItem = useRef();

	function handleMove(move, ...options) {
		if (move === 'right') {
			handleMoveRight(...options);
		} else if (move === 'left') {
			handleMoveLeft(...options);
		}
		setMove(move);
		setBgMove('bg-animation-hide');
	}

	const transitionSize = useMemo(() => {
		if (refItem.current && type === 'multi') {
			let itemSize = refItem.current;
			console.log('co refitem:', itemSize, 'step:', step);
			let size = step * (itemSize['width'] + itemSize['space']);
			setDistance(size * -1 * skips);
			return size;
		} else {
			console.log('k co refitem:', refItem.current);
		}
		return 0;
	}, [step, skips, type]);

	function handleMoveRight(type) {
		if (type === 'multi') {
			setSkips(skipstmp => {
				if (skipstmp + 1 > step) {
					return step;
				} else {
					return skipstmp + 1;
				}
			});
			console.log('ref item carousel:', refItem);
			console.log('transitionSize:', transitionSize);
		} else {
			let lastItem = listTmp.pop();
			let arr_new = [lastItem, ...listTmp];
			setIndexActive(prev => (prev + 1 > arr_new.length - 1 ? 0 : prev + 1));
			if (arr_new && arr_new.length > 1) {
				setBgActive(arr_new[1].bgSrc);
			}
			setListTmp(arr_new);
		}
	}

	function handleMoveLeft(type) {
		if (type === 'multi') {
			setSkips(skipstmp => {
				if (skipstmp - 1 < 0) {
					return skipstmp;
				} else {
					return skipstmp - 1;
				}
			});
			setDistance(distance + 1 * transitionSize);
		} else {
			let firstItem = listTmp.shift();
			let arr_new = [...listTmp, firstItem];
			setIndexActive(prev => (prev - 1 < 0 ? arr_new.length - 1 : prev - 1));
			setListTmp(arr_new);
			if (arr_new && arr_new.length > 1) {
				setBgActive(arr_new[1].bgSrc);
			}
		}
	}

	useLayoutEffect(() => {
		if (CarouselItems && CarouselItems.length < 3) {
			// throw new Error('Carousel must have greater than 2 item');
			console.warn('Carousel must have greater than 2 item');
		} else {
			console.warn('have 2 data');
			if (CarouselItems) {
				setListTmp(CarouselItems);
			}
		}
	}, [CarouselItems]);

	switch (type) {
		case 'strecth':
			return (
				<>
					<$.Sheet
						height={height}
						width={width}
						{...attrs}
						className={`sheet ${bgMove}`}
						ref={ref}
						backgroundImage={bgActive}
						onAnimationEnd={() => setBgMove('bg-animation')}
					>
						{listTmp.map((item, index) => {
							return (
								<Fragment key={'wrap-' + index}>
									<$.CarouselItem
										onAnimationEnd={() => {
											handleMove('');
										}}
										key={index}
										src={item.imgSrc}
										className={`carousel-item ${move}`}
										style={{ translate: '-100%' }}
										// theme={item.theme}
									>
										<$.Infomation
											key={`info-${index}`}
											offset={offset}
											className="infomation"
										>
											{render(item)}
										</$.Infomation>
										<$.BgLeft className="bg-left" />
										<$.BgTop className="bg-top" />
										<$.BgBottom className="bg-bottom" />
									</$.CarouselItem>
								</Fragment>
							);
						})}
						{
							<$.Control
								className="control-left"
								onClick={() => handleMove('left')}
							>
								<FontAwesomeIcon icon={faChevronLeft} />
							</$.Control>
						}
						<$.Control
							className="control-right"
							onClick={() => handleMove('right')}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</$.Control>
						<$.Indicators
							className="indicators"
							totalsize={listTmp && listTmp.length}
							bottom={'2rem'}
							right={'2rem'}
							offset={offset}
						>
							{listTmp.map((element, index) => {
								return (
									<$.Indicator
										className={index === indexActive ? 'active' : ''}
										key={`indicator-${index}`}
									/>
								);
							})}
						</$.Indicators>
					</$.Sheet>
					<$.SheetNeighbor className="sheetNeighbor">{children}</$.SheetNeighbor>
				</>
			);
		case 'multi':
			return (
				<$.SupperMultiSheet className="super-multi-sheet">
					<$.MultiSheet
						size={listTmp.length}
						className="multi"
						maxwidth={
							refItem.current
								? (refItem.current.width * parseInt(step) +
										refItem.current.space * (parseInt(step) + 1)) /
										10 +
								  'rem'
								: ''
						}
						space={(refItem.current && refItem.current.space / 10 + 'rem') || ''}
						{...attrs}
					>
						<$.ItemSheet
							className="items-sheet"
							space={(refItem.current && refItem.current.space / 10 + 'rem') || ''}
							// step={step}
							distance={distance + 'px'}
							{...attrs}
						>
							<Items
								ref={refItem}
								// src="/reviewfilm/"
								items={listTmp}
								type="VERTICAL_DISPLAY_TYPE"
								hImage={'25.35rem'}
								wImage={'23rem'}
								hoverCardoFlag
								{...attrs}
							/>
						</$.ItemSheet>
					</$.MultiSheet>
					{skips > 0 && (
						<$.Control
							className="control-left"
							onClick={() => handleMove('left', type)}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</$.Control>
					)}
					{skips + step < listTmp.length && (
						<$.Control
							className="control-right"
							onClick={() => handleMove('right', type)}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</$.Control>
					)}
				</$.SupperMultiSheet>
			);
		case 'multi_one_step':
			return <></>;

		default:
			return <></>;
	}
}

export default forwardRef(Carousel);
