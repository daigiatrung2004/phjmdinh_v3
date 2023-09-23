import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useEffect, useState } from 'react';
import { Fragment } from 'react';

function Carousel(
	{
		CarouselItems = [],
		children,
		render,
		type,
		height = '700px',
		width = '100%',
		offset,
		indicatorFlag,
		offsetIndicator,
		...attrs
	},
	ref
) {
	const [move, setMove] = useState('');
	const [listTmp, setListTmp] = useState(CarouselItems);
	const [indexActive, setIndexActive] = useState(0);

	function handleMove(move) {
		if (move == 'right') {
			handleMoveRight();
		} else if (move == 'left') {
			handleMoveLeft();
		}
		setMove(move);
	}

	function handleMoveRight() {
		let lastItem = listTmp.pop();
		let arr_new = [lastItem, ...listTmp];
		setIndexActive(prev => (prev + 1 > arr_new.length - 1 ? 0 : prev + 1));
		setListTmp(arr_new);
	}

	function handleMoveLeft() {
		let firstItem = listTmp.shift();
		let arr_new = [...listTmp, firstItem];
		setIndexActive(prev => (prev - 1 < 0 ? arr_new.length - 1 : prev - 1));
		setListTmp(arr_new);
	}

	useEffect(() => {
		console.log('carouselitems:', listTmp);
		if (CarouselItems.length < 3) {
			throw new Error('Carousel must have greater than 2 item');
		}
	}, []);

	switch (type) {
		case 'strecth':
			return (
				<>
					<$.Sheet
						height={height}
						width={width}
						{...attrs}
						className="sheet"
						ref={ref}
					>
						{listTmp.map((item, index) => {
							return (
								<Fragment key={'wrap-' + index}>
									<$.CarouselItem
										onAnimationEnd={() => handleMove('')}
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
						<$.Control
							className="control-left"
							onClick={() => handleMove('left')}
						>
							<FontAwesomeIcon icon={faChevronLeft} />
						</$.Control>
						<$.Control
							className="control-right"
							onClick={() => handleMove('right')}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</$.Control>
						<$.Indicators
							className="indicators"
							totalsize={listTmp.length}
							bottom={'2rem'}
							right={'2rem'}
							offset={offset}
						>
							{listTmp.map((element, index) => {
								return (
									<$.Indicator
										className={index == indexActive ? 'active' : ''}
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
			return <></>;

		default:
			return <></>;
	}
}

export default forwardRef(Carousel);
