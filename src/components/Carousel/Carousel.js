import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as $ from './Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { forwardRef, useEffect, useState } from 'react';

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
		setListTmp([lastItem, ...listTmp]);
	}

	function handleMoveLeft() {
		let firstItem = listTmp.shift();
		setListTmp([...listTmp, firstItem]);
	}

	useEffect(() => {
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
								<$.CarouselItem
									onAnimationEnd={() => handleMove('')}
									key={index}
									src={item}
									className={`carousel-item ${move}`}
									style={{ translate: '-100%' }}
								/>
							);
						})}
						<$.Infomation
							offset={offset}
							className="infomation"
						>
							{render()}
						</$.Infomation>
						<$.Control className="control-left">
							<FontAwesomeIcon
								icon={faChevronLeft}
								onClick={() => handleMove('left')}
							/>
						</$.Control>
						<$.Control
							className="control-right"
							onClick={() => handleMove('right')}
						>
							<FontAwesomeIcon icon={faChevronRight} />
						</$.Control>
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
