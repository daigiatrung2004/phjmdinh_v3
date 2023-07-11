import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';
import * as $ from './Styles';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Background from '~/components/Background';
import Items from '~/components/FilmItems';
import ItemsContext from './itemscontext';
import reducer from './reducer';

function Slide(settings) {
	// const [position, setPosition] = useState(0);
	const [position, dispatch] = useReducer(reducer, 0);
	const refItem = useRef();

	function handleLeft() {
		// dispatch({
		// 	type: 'left',
		// 	payload:
		// });
	}

	function handleRight() {}

	const config = {
		type: 'default',
		transitionTime: 2000,
		list: [
			{
				backdropPath: '/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg',
				title: 'Áo Giáp Vàng: Thánh Chiến Khởi Đầu',
				originalTitle: 'Knights of the Zodiac',
			},
			{
				backdropPath: '/woJbg7ZqidhpvqFGGMRhWQNoxwa.jpg',
				title: 'Transformers: Quái Thú Trỗi Dậy',
				originalTitle: 'Transformers: Rise of the Beasts',
			},
			{
				backdropPath: '/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
				title: 'Xứ Sở Các Nguyên Tố',
				originalTitle: 'Elemental',
			},
			{
				backdropPath: '/aO6hDsqTIAtQFUBoPWklmPFsSTW.jpg',
				title: 'Quỷ Quyệt: Cửa Đỏ Vô Định',
				originalTitle: 'Insidious: The Red Door',
			},
		],
	};

	Object.assign(config, settings);
	return (
		<Background>
			<Button
				style={{ position: 'absolute', top: '0', bottom: '0', left: '0', zIndex: '100000' }}
				onClick={() => handleLeft()}
			>
				<FontAwesomeIcon icon={faChevronLeft} />
			</Button>
			<Button
				style={{ position: 'absolute', top: '0', bottom: '0', right: '0', zIndex: '10000' }}
				onClick={() => handleRight()}
			>
				<FontAwesomeIcon icon={faChevronRight} />
			</Button>
			<$.Frame
				style={{
					marginTop: '20px',
					padding: '0px',
					display: 'flex',
					overflow: 'hidden',
					transition: 'all 0.2s ease-in-out',
					transform: `translateX(${position}px)`,
					zIndex: 0,
				}}
			>
				<ItemsContext.Provider value={refItem}>
					<Items
						src="/reviewfilm/"
						items={config['list']}
						type={'HORIZON_DISPLAY_TYPE'}
					/>
				</ItemsContext.Provider>
			</$.Frame>
		</Background>
	);
}

export default Slide;
